import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBars,
  FaUser,
  FaUpload,
} from "react-icons/fa";

const UserDashboard = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const totalVideos = 12;
  const suspicious = 4;
  const Organization = "GCET";

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-white shadow flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <button onClick={() => setOpen(!open)} className="text-xl">
            <FaBars />
          </button>

          <h1 className="font-semibold text-lg">User Dashboard</h1>
        </div>

        <button
          onClick={() => navigate("/user/profile")}
          className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center"
        >
          <FaUser />
        </button>
      </div>

      {open && (
        <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg p-6">
          <h2 className="text-xl font-bold mb-8">User Panel</h2>

          <div className="space-y-6">
            <button
              onClick={() => {
                navigate("/user/dashboard");
                setOpen(false);
              }}
              className="flex items-center gap-3"
            >
              Operator
            </button>

            <button
              onClick={() => {
                navigate("/user/upload");
                setOpen(false);
              }}
              className="flex items-center gap-3"
            >
              <FaUpload />
              Upload Video
            </button>

            <button
              onClick={() => {
                navigate("/user/profile");
                setOpen(false);
              }}
              className="flex items-center gap-3"
            >
              <FaUser />
              Profile
            </button>

            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-3 text-red-500"
            >
              Logout
            </button>
          </div>
        </div>
      )}

      <div className="p-10">
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500 text-sm">Total Videos</p>

            <p className="text-3xl font-bold">{totalVideos}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500 text-sm">Suspicious Activity</p>

            <p className="text-3xl font-bold text-red-500">{suspicious}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500 text-sm">Organization</p>

            <p className="text-lg font-semibold">{Organization}</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4">
            Upload Surveillance Video
          </h2>

          <button
            onClick={() => navigate("/user/upload")}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg flex items-center gap-3"
          >
            <FaUpload />
            Upload Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
