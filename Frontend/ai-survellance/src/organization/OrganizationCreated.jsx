import { useLocation, useNavigate } from "react-router-dom";

const OrganizationCreated = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const code = location.state?.code;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-100">

      <div className="bg-white p-12 rounded-3xl shadow-2xl text-center max-w-md w-full">

        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Organization Created 🎉
        </h1>

        <p className="text-gray-500 mb-6">
          Share this code with members to join your organization
        </p>

        <div className="text-4xl font-bold text-blue-600 tracking-widest mb-8">
          {code}
        </div>

        <button
          onClick={() => navigate("/admin/dashboard")}
          className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-xl hover:scale-[1.02] transition"
        >
          Continue to Dashboard
        </button>

      </div>

    </div>
  );
};

export default OrganizationCreated;