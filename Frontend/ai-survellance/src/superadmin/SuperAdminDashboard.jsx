import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBars,
  FaBuilding,
  FaUserShield,
  FaUsers,
  FaVideo,
  FaSignOutAlt,
} from "react-icons/fa";

const SuperAdminDashboard = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const totalOrganizations = 8;
  const pendingAdmins = 3;
  const totalUsers = 42;
  const totalVideos = 96;

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-white shadow flex items-center justify-between px-6 py-4">
        <button onClick={() => setOpen(!open)} className="text-xl">
          <FaBars />
        </button>

        <h1 className="font-semibold text-lg">Super Admin Dashboard</h1>

        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-red-500"
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>

      {open && (
        <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg p-6">
          <h2 className="text-xl font-bold mb-8">Super Admin</h2>

          <div className="space-y-6">
            <button
              onClick={() => {
                navigate("/superadmin/dashboard");
                setOpen(false);
              }}
              className="flex items-center gap-3"
            >
              Dashboard
            </button>

            <button
              onClick={() => {
                navigate("/superadmin/approve-admins");
                setOpen(false);
              }}
              className="flex items-center gap-3"
            >
              Approve Admins
            </button>

            <button
              onClick={() => {
                navigate("/superadmin/organizations");
                setOpen(false);
              }}
              className="flex items-center gap-3"
            >
              Manage Organizations
            </button>
          </div>
        </div>
      )}

      <div className="p-10">
        <h1 className="text-2xl font-bold mb-6">System Overview</h1>

        <div className="grid grid-cols-4 gap-6 mb-10">
          <div className="bg-white p-6 rounded-xl shadow flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Organizations</p>
              <p className="text-3xl font-bold">{totalOrganizations}</p>
            </div>
            <FaBuilding className="text-3xl text-gray-600" />
          </div>

          <div className="bg-white p-6 rounded-xl shadow flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Pending Admins</p>
              <p className="text-3xl font-bold">{pendingAdmins}</p>
            </div>
            <FaUserShield className="text-3xl text-gray-600" />
          </div>

          <div className="bg-white p-6 rounded-xl shadow flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Users</p>
              <p className="text-3xl font-bold">{totalUsers}</p>
            </div>
            <FaUsers className="text-3xl text-gray-600" />
          </div>

          <div className="bg-white p-6 rounded-xl shadow flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Videos Uploaded</p>
              <p className="text-3xl font-bold">{totalVideos}</p>
            </div>
            <FaVideo className="text-3xl text-gray-600" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-8 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-4">Admin Requests</h2>

            <p className="text-gray-600 mb-6">
              Review new organization admins waiting for approval.
            </p>

            <button
              onClick={() => navigate("/superadmin/approve-admins")}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg"
            >
              View Requests
            </button>
          </div>

          <div className="bg-white p-8 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-4">Organizations</h2>

            <p className="text-gray-600 mb-6">
              Manage all registered organizations.
            </p>

            <button
              onClick={() => navigate("/superadmin/organizations")}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg"
            >
              Manage Organizations
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;
