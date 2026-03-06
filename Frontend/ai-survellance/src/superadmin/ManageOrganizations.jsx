import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTrash, FaArrowLeft } from "react-icons/fa";

const ManageOrganizations = () => {
  const navigate = useNavigate();

  const [organizations, setOrganizations] = useState([
    { id: 1, name: "GCET", admin: "Khush", users: 5, status: "Active" },
    { id: 2, name: "MBIT", admin: "Sidhdrajsinh", users: 3, status: "Active" },
    { id: 3, name: "ADIT", admin: "Nitya", users: 4, status: "Active" },
  ]);

  const removeOrganization = (id) => {
    setOrganizations(organizations.filter((org) => org.id !== id));
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
        <h1 className="text-2xl font-bold">Manage Organizations</h1>
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-left">Organization</th>
              <th className="p-4 text-left">Admin</th>
              <th className="p-4 text-left">Total Users</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {organizations.map((org) => (
              <tr key={org.id} className="border-t">
                <td className="p-4">{org.name}</td>

                <td className="p-4">{org.admin}</td>

                <td className="p-4">{org.users}</td>

                <td className="p-4">
                  <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">
                    {org.status}
                  </span>
                </td>

                <td className="p-4">
                  <button
                    onClick={() => removeOrganization(org.id)}
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

export default ManageOrganizations;
