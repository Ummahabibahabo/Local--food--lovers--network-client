// import { useContext, useState } from "react";
// import { AuthContext } from "../Components/AuthContext";
// import { Link, useLocation, useNavigate } from "react-router";
// import { toast } from "react-toastify";
// import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
// import { FcGoogle } from "react-icons/fc";

// const LoginPage = () => {
//   const { loginUser, loginWithGoogle } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const from = location.state?.from?.pathname || "/";

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       await loginUser(email, password);
//       toast.success("Login successful!");
//       setTimeout(() => navigate(from, { replace: true }), 800);
//     } catch (err) {
//       toast.error(err.message);
//     }
//   };

//   const handleGoogleLogin = async () => {
//     try {
//       await loginWithGoogle();
//       toast.success("Google login successful!");
//       setTimeout(() => navigate(from, { replace: true }), 800);
//     } catch (err) {
//       toast.error(err.message);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-pink-50 to-blue-50">
//       <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-md">
//         <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
//           Login
//         </h2>

//         {/* Login Form */}
//         <form onSubmit={handleLogin} className="space-y-4">
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />

//           <div className="relative">
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 pr-12"
//             />
//             <span
//               className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? (
//                 <AiFillEyeInvisible size={22} />
//               ) : (
//                 <AiFillEye size={22} />
//               )}
//             </span>
//           </div>

//           <button className="w-full py-3  text-white rounded-md transition duration-300 bg-gradient-to-b from-[#3B5C5E] to-[#335451] hover:opacity-90">
//             Login
//           </button>
//         </form>

//         <div className="flex items-center my-6">
//           <hr className="flex-1 border-gray-300" />
//           <span className="mx-3 text-gray-400 text-sm">OR</span>
//           <hr className="flex-1 border-gray-300" />
//         </div>

//         {/* Google Login */}
//         <button
//           onClick={handleGoogleLogin}
//           className="w-full flex items-center justify-center gap-2 py-2 border rounded-lg shadow-sm  text-white font-medium transition duration-300 bg-gradient-to-b from-[#3B5C5E] to-[#335451] hover:opacity-90 mr-2"
//         >
//           <FcGoogle size={24} />
//           Sign in with Google
//         </button>

//         {/* Register Link */}
//         <p className="mt-4 text-sm text-center text-gray-600">
//           Don't have an account?{" "}
//           <Link
//             to="/registerPage"
//             className="text-blue-600 font-medium hover:underline"
//           >
//             Register Here
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
import { useContext, useState } from "react";
import { AuthContext } from "../Components/AuthContext";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  const { loginUser, loginWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginUser(email, password);
      toast.success("Login successful!");
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      toast.success("Google login successful!");
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-pink-50 to-blue-50">
      <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-md">
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
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 pr-12"
            />
            <span
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <AiFillEyeInvisible size={22} />
              ) : (
                <AiFillEye size={22} />
              )}
            </span>
          </div>

          <button className="w-full py-3 text-white rounded-md bg-gradient-to-b from-[#3B5C5E] to-[#335451] hover:opacity-90">
            Login
          </button>
        </form>

        <div className="flex items-center my-6">
          <hr className="flex-1 border-gray-300" />
          <span className="mx-3 text-gray-400 text-sm">OR</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 py-2 border rounded-lg shadow-sm text-white font-medium bg-gradient-to-b from-[#3B5C5E] to-[#335451] hover:opacity-90"
        >
          <FcGoogle size={24} /> Continue with Google
        </button>

        <p className="mt-4 text-sm text-center text-gray-600">
          Don't have an account?{" "}
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
