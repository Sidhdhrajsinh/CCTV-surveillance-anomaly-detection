import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "superadmin" && password === "superadmin@123") {
      navigate("/superadmin/dashboard");
    } else {
      navigate("/organization");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-100">

      <div className="w-full max-w-md p-10 bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl border border-gray-100">

        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          AI Surveillance
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Smart Security Monitoring
        </p>

        <form onSubmit={handleLogin} className="space-y-5">

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <span
              className="absolute right-4 top-3.5 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-xl hover:scale-[1.02] transition"
          >
            Login
          </button>

        </form>

        <div className="flex justify-between mt-6 text-sm">

          <Link to="/forgot-password" className="text-blue-500 hover:underline">
            Forgot Password?
          </Link>

          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </Link>

        </div>

      </div>

    </div>
  );
};

export default Login;