import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const JoinOrganization = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputs = useRef([]);

  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  const handleJoin = (e) => {
    e.preventDefault();
    const finalCode = code.join("");

    if (finalCode.length !== 6) {
      alert("Please enter a valid 6 digit code");
      return;
    }

    navigate("/user/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-100">

      <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md text-center">

        <h1 className="text-3xl font-bold text-gray-800 mb-3">
          Join Organization
        </h1>

        <p className="text-gray-500 mb-8">
          Enter the 6-digit organization code
        </p>

        <form onSubmit={handleJoin}>

          <div className="flex justify-between mb-8">

            {code.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={digit}
                ref={(el) => (inputs.current[index] = el)}
                onChange={(e) => handleChange(e.target.value, index)}
                className="w-12 h-12 text-center text-xl border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
              />
            ))}

          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-xl hover:scale-[1.02] transition"
          >
            Join Organization
          </button>

        </form>

      </div>

    </div>
  );
};

export default JoinOrganization;