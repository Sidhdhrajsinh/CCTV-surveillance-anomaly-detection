import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheck, FaTimes, FaArrowLeft } from "react-icons/fa";

const ApproveAdmins = () => {
  const navigate = useNavigate();

  const [admins, setAdmins] = useState([
    {
      id: 1,
      name: "Khush",
      organization: "GCET",
      email: "khush@gmail.com",
      status: "Pending",
    },
    {
      id: 2,
      name: "Sidhdrajsinh",
      organization: "MBIT",
      email: "sidhraj@gmail.com",
      status: "Pending",
    },
    {
      id: 3,
      name: "Nitya",
      organization: "ADIT",
      email: "nitya@gmail.com",
      status: "Approved",
    },
  ]);

  const approveAdmin = (id) => {
    setAdmins(
      admins.map((a) => (a.id === id ? { ...a, status: "Approved" } : a)),
    );
  };

  const rejectAdmin = (id) => {
    setAdmins(admins.filter((a) => a.id !== id));
  };

  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={() => navigate("/superadmin/dashboard")}
          className="text-lg"
        >
          <FaArrowLeft />
        </button>
        <h1 className="text-2xl font-bold">Admin Requests</h1>
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-left">Admin Name</th>
              <th className="p-4 text-left">Organization</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {admins.map((admin) => (
              <tr key={admin.id} className="border-t">
                <td className="p-4">{admin.name}</td>

                <td className="p-4">{admin.organization}</td>

                <td className="p-4">{admin.email}</td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${admin.status === "Approved" ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-600"}`}
                  >
                    {admin.status}
                  </span>
                </td>

                <td className="p-4 flex gap-3">
                  <button
                    onClick={() => approveAdmin(admin.id)}
                    className="text-green-600 hover:text-green-800"
                  >
                    <FaCheck />
                  </button>

                  <button
                    onClick={() => rejectAdmin(admin.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTimes />
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

export default ApproveAdmins;
