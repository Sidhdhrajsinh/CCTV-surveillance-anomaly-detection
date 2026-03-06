import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateOrganization = () => {

  const navigate = useNavigate();

  const [orgName, setOrgName] = useState("");
  const [orgType, setOrgType] = useState("");
  const [adminName, setAdminName] = useState("");
  const[adminnumber, setAdminNumber] = useState("")
  const [adminEmail, setAdminEmail] = useState("");

  const generateCode = () => {
    return Math.floor(100000 + Math.random() * 900000);
  };

  const handleCreate = (e) => {
    e.preventDefault();

    const code = generateCode();

    navigate("/organization-created", { state: { code } });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-100">

      <div className="w-full max-w-lg p-10 bg-white shadow-2xl rounded-3xl border">

        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Create Organization
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Setup your organization and become an admin
        </p>

        <form onSubmit={handleCreate} className="space-y-5">

          <input
            type="text"
            placeholder="Organization Name"
            value={orgName}
            onChange={(e) => setOrgName(e.target.value)}
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <select
            value={orgType}
            onChange={(e) => setOrgType(e.target.value)}
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
          >
            <option value="">Select Organization Type</option>
            <option>Company</option>
            <option>College</option>
            <option>Office</option>
            <option>Startup</option>
          </select>

          <input
            type="text"
            placeholder="Admin Name"
            value={adminName}
            onChange={(e) => setAdminName(e.target.value)}
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <input
            type="number"
            placeholder="PhoneNumber"
            value={adminnumber}
            onChange={(e) => setAdminNumber(e.target.value)}
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <input
            type="email"
            placeholder="Admin Email"
            value={adminEmail}
            onChange={(e) => setAdminEmail(e.target.value)}
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-xl hover:scale-[1.02] transition"
          >
            Create Organization
          </button>

        </form>

      </div>

    </div>
  );
};

export default CreateOrganization;