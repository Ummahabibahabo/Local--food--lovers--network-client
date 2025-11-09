import React, { useContext, useState } from "react";
import { AuthContext } from "../Components/AuthContext";
import { useNavigate, useLocation, Link } from "react-router";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  const { loginUser, loginWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginUser(email, password);
      toast.success("Login successful!");
      setTimeout(() => navigate(from, { replace: true }), 800);
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      toast.success("Google login successful!");
      setTimeout(() => navigate(from, { replace: true }), 800);
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-gradient-to-br from-pink-100 to-blue-100 p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Login
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="w-full py-3  text-white rounded-md transition duration-300 bg-gradient-to-b from-[#3B5C5E] to-[#335451] hover:opacity-90">
            Login
          </button>
        </form>

        <div className="flex items-center my-6">
          <hr className="flex-1 border-gray-300" />
          <span className="mx-3 text-gray-500 text-sm">OR</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 py-2 border rounded-lg shadow-sm  text-white font-medium transition duration-300 bg-gradient-to-b from-[#3B5C5E] to-[#335451] hover:opacity-90 mr-2"
        >
          <FcGoogle size={24} />
          Sign in with Google
        </button>

        {/* Login Link */}
        <p className="mt-4 text-sm text-center">
          Already have an account?{" "}
          <Link
            to="/registerPage"
            className="text-blue-600 font-medium hover:underline"
          >
            Register Here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
