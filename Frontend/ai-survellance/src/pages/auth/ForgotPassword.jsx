import { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email");
      return;
    }

    alert("Password reset link sent to your email");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-100">

      <div className="w-full max-w-md p-10 bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl border border-gray-100">

        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Forgot Password
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Enter your email to reset password
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-xl hover:scale-[1.02] transition"
          >
            Send Reset Link
          </button>

        </form>

        <div className="text-center mt-6 text-sm">

          <Link
            to="/"
            className="text-blue-500 hover:underline"
          >
            Back to Login
          </Link>

        </div>

      </div>

    </div>
  );
};

export default ForgotPassword;