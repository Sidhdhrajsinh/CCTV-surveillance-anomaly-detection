import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {FaBars,FaHome,FaUpload,FaUsers,FaUserCircle,FaSignOutAlt} from "react-icons/fa";

import {PieChart,Pie,Cell,LineChart,Line,XAxis,YAxis,Tooltip,ResponsiveContainer,Legend} from "recharts";
const AdminDashboard = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const donutData = [
    { name: "Loitering", value: 8 },
    { name: "Restricted Area", value: 5 },
    { name: "Sudden Run", value: 3 }
  ];
  const lineData = [
    { activity: "Loitering", count: 8 },
    { activity: "Restricted Area", count: 5 },
    { activity: "Sudden Run", count: 3 }
  ];
  const COLORS = ["#f59e0b", "#ef4444", "#3b82f6"];
  return (
    <div className="min-h-screen bg-gray-100 flex">
      <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl transform ${open ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 flex flex-col`}>
        <div className="p-6 text-2xl font-bold border-b">
          Admin Panel
        </div>
        <nav className="p-4 space-y-2 flex-1">
          <Link
            to="/admin/dashboard"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50">
            <FaHome /> Dashboard
          </Link>
          <Link
            to="/upload-video"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50">
            <FaUpload /> Upload Video
          </Link>
          <Link
            to="/manage-users"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50">
            <FaUsers /> Manage Users
          </Link>
          <Link
            to="/admin/profile"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50"
          >
            <FaUserCircle /> Profile
          </Link>
        </nav>
        <div className="p-4 border-t">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-red-50 text-red-500"
          >
            <FaSignOutAlt /> Logout
          </Link>
        </div>
      </div>
      <div className="flex-1">
        <div className="bg-white shadow p-4 flex items-center justify-between">
          <div className="flex items-center">
            <button
              onClick={() => setOpen(!open)}
              className="text-2xl mr-4"
            >
              <FaBars />
            </button>
            <h1 className="text-xl font-semibold">
              Admin Dashboard
            </h1>
          </div>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => navigate("/admin/profile")}
              className="w-10 h-10 rounded-full bg-blue-300 text-white flex items-center justify-center">
              <FaUserCircle/>
            </button>
          </div>
        </div>
        <div className="p-8">
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-gray-500">Total Videos</h3>
              <p className="text-3xl font-bold">24</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-gray-500">Suspicious Activity</h3>
              <p className="text-3xl font-bold text-red-500">16</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-gray-500">Users</h3>
              <p className="text-3xl font-bold">12</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold mb-4">
                Suspicious Activity Distribution
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={donutData}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {donutData.map((entry, index) => (
                      <Cell key={index} fill={COLORS[index]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold mb-4">
                Suspicious Activity Trend
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={lineData}>
                  <XAxis dataKey="activity" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="count"
                    stroke="#3b82f6"
                    strokeWidth={3}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;