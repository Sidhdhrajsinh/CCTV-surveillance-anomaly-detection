import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaTrash,
  FaUsers,
  FaUserShield,
  FaUserCheck,
  FaUserClock,
  FaArrowLeft,
} from "react-icons/fa";

const ManageUsers = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Khush",
      email: "khush@gmail.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "Sidhdrajsing",
      email: "Sidhdraj@gmail.com",
      role: "User",
      status: "Active",
    },
    {
      id: 3,
      name: "pratham",
      email: "pratham@gmail.com",
      role: "User",
      status: "Pending",
    },
    {
      id: 4,
      name: "Nitya",
      email: "nitya@gmail.com",
      role: "User",
      status: "Active",
    },
  ]);

  const removeUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const totalUsers = users.length;
  const admins = users.filter((u) => u.role === "Admin").length;
  const activeUsers = users.filter((u) => u.status === "Active").length;
  const pendingUsers = users.filter((u) => u.status === "Pending").length;

  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={() => navigate("/admin/dashboard")}
          className="text-xl"
        >
          <FaArrowLeft />
        </button>
        <h1 className="text-2xl font-bold">Manage Organization Users</h1>
      </div>

      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-blue-100 p-6 rounded-xl shadow flex items-center justify-between">
          <div>
            <p className="text-blue-700 text-sm">Total Users</p>
            <p className="text-3xl font-bold text-blue-900">{totalUsers}</p>
          </div>
          <FaUsers className="text-3xl text-blue-700" />
        </div>

        <div className="bg-purple-100 p-6 rounded-xl shadow flex items-center justify-between">
          <div>
            <p className="text-purple-700 text-sm">Admins</p>
            <p className="text-3xl font-bold text-purple-900">{admins}</p>
          </div>
          <FaUserShield className="text-3xl text-purple-700" />
        </div>

        <div className="bg-green-100 p-6 rounded-xl shadow flex items-center justify-between">
          <div>
            <p className="text-green-700 text-sm">Active Users</p>
            <p className="text-3xl font-bold text-green-900">{activeUsers}</p>
          </div>
          <FaUserCheck className="text-3xl text-green-700" />
        </div>

        <div className="bg-yellow-100 p-6 rounded-xl shadow flex items-center justify-between">
          <div>
            <p className="text-yellow-700 text-sm">Pending Users</p>
            <p className="text-3xl font-bold text-yellow-900">{pendingUsers}</p>
          </div>
          <FaUserClock className="text-3xl text-yellow-700" />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-left text-sm">Name</th>
              <th className="p-4 text-left text-sm">Email</th>
              <th className="p-4 text-left text-sm">Role</th>
              <th className="p-4 text-left text-sm">Status</th>
              <th className="p-4 text-left text-sm">Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t">
                <td className="p-4">{user.name}</td>
                <td className="p-4">{user.email}</td>
                <td className="p-4">{user.role}</td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${user.status === "Active" ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-600"}`}
                  >
                    {user.status}
                  </span>
                </td>

                <td className="p-4">
                  <button
                    onClick={() => removeUser(user.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
