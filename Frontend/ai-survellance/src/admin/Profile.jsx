import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCopy } from "react-icons/fa";

const AdminProfile = () => {
  const navigate = useNavigate();
  const orgName = "GCET";
  const joinCode = "483921";
  const totalVideos = 24;
  const suspicious = 7;
  const totalUsers = 5;
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [verified, setVerified] = useState(false);
  const correctPassword = "admin123";
  const checkPassword = () => {
    if (currentPassword === correctPassword) {
      setVerified(true);
    } else {
      alert("Incorrect password");
    }
  };
  const updatePassword = () => {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    alert("Password updated successfully");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setVerified(false);
  };
  const copyCode = () => {
    navigator.clipboard.writeText(joinCode);
    alert("Join code copied");
  };
  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={() => navigate("/admin/dashboard")}
          className="text-xl"
        >
          <FaArrowLeft />
        </button>
        <h1 className="text-2xl font-bold">Organization Profile</h1>
      </div>

      <div className="bg-white rounded-xl shadow p-8 mb-8">
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div>
            <p className="text-gray-500 text-sm">Organization</p>
            <p className="text-lg font-semibold">{orgName}</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Join Code</p>
            <div className="flex items-center gap-3">
              <p className="text-lg font-semibold">{joinCode}</p>
              <button onClick={copyCode} className="text-gray-600">
                <FaCopy />
              </button>
            </div>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Total Users</p>
            <p className="text-lg font-semibold">{totalUsers}</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Total Videos</p>
            <p className="text-lg font-semibold">{totalVideos}</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Suspicious Activities</p>
            <p className="text-lg font-semibold">{suspicious}</p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow p-8">
        <h2 className="text-lg font-semibold mb-4">Change Password</h2>
        {!verified && (
          <div className="space-y-4 max-w-md">
            <input
              type="password"
              placeholder="Enter current password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-full border rounded-lg p-3"
            />
            <button
              onClick={checkPassword}
              className="bg-blue-500 text-white px-5 py-2 rounded-lg"
            >
              Verify Password
            </button>
          </div>
        )}
        {verified && (
          <div className="space-y-4 max-w-md">
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full border rounded-lg p-3"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border rounded-lg p-3"
            />
            <button
              onClick={updatePassword}
              className="bg-blue-500 text-white px-5 py-2 rounded-lg"
            >
              Update Password
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default AdminProfile;