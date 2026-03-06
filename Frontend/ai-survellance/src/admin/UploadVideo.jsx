import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaUpload, FaArrowLeft } from "react-icons/fa";

const UploadVideo = () => {
  const navigate = useNavigate();

  const [preview, setPreview] = useState(null);
  const [timestamps, setTimestamps] = useState([]);
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [drawing, setDrawing] = useState(false);
  const [start, setStart] = useState({ x: 0, y: 0 });
  const [zone, setZone] = useState(null);

  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const activities = ["Loitering", "Restricted Area", "Sudden Run"];

  const fakeResults = [
    { time: 3, label: "Loitering" },
    { time: 6, label: "Restricted Area" },
    { time: 10, label: "Sudden Run" },
  ];

  const handleVideo = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setPreview(URL.createObjectURL(file));
    setTimestamps([]);
  };

  const toggleActivity = (activity) => {
    if (selectedActivities.includes(activity)) {
      setSelectedActivities(selectedActivities.filter((a) => a !== activity));
    } else {
      setSelectedActivities([...selectedActivities, activity]);
    }
  };

  const analyzeVideo = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;

    const current = Math.floor(videoRef.current.currentTime);

    fakeResults.forEach((item) => {
      if (item.time === current && selectedActivities.includes(item.label)) {
        const formatted = `00:${item.time < 10 ? "0" + item.time : item.time}`;
        if (!timestamps.find((t) => t.time === formatted)) {
          setTimestamps((prev) => [
            ...prev,
            { time: formatted, label: item.label },
          ]);
        }
      }
    });
  };

  const jumpToTime = (time) => {
    const seconds = parseInt(time.split(":")[1]);
    videoRef.current.currentTime = seconds;
    videoRef.current.play();
  };

  const handleMouseDown = (e) => {
    if (!selectedActivities.includes("Restricted Area")) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setStart({ x, y });
    setDrawing(true);
  };

  const handleMouseMove = (e) => {
    if (!drawing) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const width = x - start.x;
    const height = y - start.y;

    const ctx = canvasRef.current.getContext("2d");

    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    ctx.strokeStyle = "red";
    ctx.lineWidth = 3;
    ctx.strokeRect(start.x, start.y, width, height);
  };

  const handleMouseUp = async (e) => {
    if (!drawing) return;

    const rect = canvasRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const x1 = start.x;
    const y1 = start.y;

    const x2 = x;
    const y2 = y;

    const zoneCoordinates = [
      [Math.round(x1), Math.round(y1)],
      [Math.round(x2), Math.round(y1)],
      [Math.round(x2), Math.round(y2)],
      [Math.round(x1), Math.round(y2)],
    ];

    setZone(zoneCoordinates);
    setDrawing(false);

    try {
      await fetch("http://localhost:5000/restricted-area", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ zone: zoneCoordinates }),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={() => navigate("/admin/dashboard")}
          className="p-2 rounded-full hover:bg-gray-200"
        >
          <FaArrowLeft size={18} />
        </button>
        <h1 className="text-2xl font-bold">Upload Surveillance Video</h1>
      </div>
      <div className="bg-white p-8 rounded-xl shadow">
        {!preview && (
          <label className="bg-blue-500 text-white px-6 py-3 rounded-lg cursor-pointer flex items-center gap-2 w-fit">
            <FaUpload />
            Upload Video
            <input type="file" accept="video/*" hidden onChange={handleVideo} />
          </label>
        )}

        {preview && (
          <>
            <div className="relative w-full max-w-4xl">
              <video
                ref={videoRef}
                src={preview}
                controls
                onTimeUpdate={handleTimeUpdate}
                className="w-full rounded-lg"
              />

              <canvas
                ref={canvasRef}
                width="800"
                height="450"
                className="absolute top-0 left-0"
                style={{
                  cursor: selectedActivities.includes("Restricted Area")
                    ? "crosshair"
                    : "default",
                }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
              />
            </div>
            <div className="flex gap-8 mt-6">
              {activities.map((activity) => (
                <label key={activity} className="flex gap-2">
                  <input
                    type="checkbox"
                    checked={selectedActivities.includes(activity)}
                    onChange={() => toggleActivity(activity)}
                  />
                  {activity}
                </label>
              ))}
            </div>
            <button
              onClick={analyzeVideo}
              className="mt-6 bg-blue-500 text-white px-6 py-2 rounded"
            >
              Analyze Video
            </button>
            {loading && <p className="mt-4 text-blue-500">Analyzing...</p>}
            {zone && (
              <div className="mt-6 bg-gray-100 p-4 rounded">
                <p>zone="{JSON.stringify(zone)}"</p>
              </div>
            )}
            {timestamps.length > 0 && (
              <div className="mt-6 flex gap-3 flex-wrap">
                {timestamps.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => jumpToTime(item.time)}
                    className="bg-red-100 text-red-600 px-4 py-2 rounded"
                  >
                    {item.time} - {item.label}
                  </button>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default UploadVideo;