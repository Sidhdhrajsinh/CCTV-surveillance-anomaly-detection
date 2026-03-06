import { useNavigate } from "react-router-dom";
import { FaBuilding, FaUserPlus } from "react-icons/fa";

const OrganizationChoice = () => {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-100">

      <div className="w-full max-w-4xl p-10">

        <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Choose Organization Option
        </h1>

        <div className="grid md:grid-cols-2 gap-10">


          <div
            onClick={() => navigate("/create-organization")}
            className="cursor-pointer bg-white p-10 rounded-3xl shadow-xl border hover:shadow-2xl hover:scale-[1.02] transition text-center"
          >
            <FaBuilding className="text-5xl text-blue-500 mx-auto mb-5" />

            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Create Organization
            </h2>

            <p className="text-gray-500">
              Create a new organization and become an admin
            </p>
          </div>

          <div
            onClick={() => navigate("/join-organization")}
            className="cursor-pointer bg-white p-10 rounded-3xl shadow-xl border hover:shadow-2xl hover:scale-[1.02] transition text-center"
          >
            <FaUserPlus className="text-5xl text-indigo-500 mx-auto mb-5" />

            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Join Organization
            </h2>

            <p className="text-gray-500">
              Enter the organization code to join
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default OrganizationChoice;