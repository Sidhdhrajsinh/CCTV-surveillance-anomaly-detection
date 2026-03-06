import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaUpload, FaArrowLeft } from "react-icons/fa";

const UploadVideo = () => {
  const navigate = useNavigate();

  const [preview, setPreview] = useState(null);
  const [timestamps, setTimestamps] = useState([]);
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [loading, setLoading] = useState(false);

  const videoRef = useRef(null);

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

  const UploadAnother = () =>{
    setPreview(null)
    setTimestamps([])
    setSelectedActivities([])
  }

  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={() => navigate("/user/dashboard")}
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
            <video
              ref={videoRef}
              src={preview}
              controls
              onTimeUpdate={handleTimeUpdate}
              className="w-full rounded-lg"
            />

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
