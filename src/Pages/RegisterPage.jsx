// import { useContext, useState } from "react";
// import { AuthContext } from "../Components/AuthContext";
// import { Link, useNavigate } from "react-router";
// import { toast } from "react-toastify";
// import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
// import { FcGoogle } from "react-icons/fc";

// const RegisterPage = () => {
//   const { registerUser, loginWithGoogle } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [photo, setPhoto] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const validatePassword = (pw) =>
//     /[a-z]/.test(pw) && /[A-Z]/.test(pw) && pw.length >= 6;

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     if (!validatePassword(password)) {
//       toast.error("Password must have 6+ chars with upper & lower case");
//       return;
//     }
//     if (password !== confirmPassword) {
//       toast.error("Passwords do not match");
//       return;
//     }

//     try {
//       await registerUser(name, email, password, photo);
//       toast.success("Registration successful!");
//       setTimeout(() => navigate("/"), 1000);
//     } catch (err) {
//       toast.error(err.message);
//     }
//   };

//   const handleGoogleLogin = async () => {
//     try {
//       await loginWithGoogle();
//       toast.success("Logged in with Google!");
//       setTimeout(() => navigate("/"), 800);
//     } catch (err) {
//       toast.error(err.message);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="bg-gradient-to-br from-pink-100 via-orange-100 to-purple-100 p-8 rounded-2xl shadow-lg w-full max-w-md">
//         <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
//           Register
//         </h2>

//         <form onSubmit={handleRegister} className="space-y-4">
//           <input
//             type="text"
//             placeholder="Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//             className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />

//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />

//           <input
//             type="text"
//             placeholder="Photo URL"
//             value={photo}
//             onChange={(e) => setPhoto(e.target.value)}
//             className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />

//           {/* Password */}
//           <div className="relative">
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 pr-12"
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

//           {/* Confirm Password */}
//           <div className="relative">
//             <input
//               type={showConfirmPassword ? "text" : "password"}
//               placeholder="Confirm Password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               required
//               className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 pr-12"
//             />
//             <span
//               className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
//               onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//             >
//               {showConfirmPassword ? (
//                 <AiFillEyeInvisible size={22} />
//               ) : (
//                 <AiFillEye size={22} />
//               )}
//             </span>
//           </div>

//           <button className="w-full py-3 transition duration-300 bg-gradient-to-b from-[#3B5C5E] to-[#335451] hover:opacity-90 text-white rounded-md">
//             Register
//           </button>
//         </form>

//         <div className="flex items-center my-6">
//           <hr className="flex-1 border-gray-300" />
//           <span className="mx-3 text-gray-500 text-sm">OR</span>
//           <hr className="flex-1 border-gray-300" />
//         </div>

//         <button
//           onClick={handleGoogleLogin}
//           className="w-full flex items-center justify-center gap-2 py-2 border rounded-lg shadow-sm text-white font-medium transition duration-300 bg-gradient-to-b from-[#3B5C5E] to-[#335451] hover:opacity-90"
//         >
//           <FcGoogle size={24} />
//           Continue with Google
//         </button>

//         <p className="mt-4 text-sm text-center">
//           Already have an account?{" "}
//           <Link
//             to="/loginPage"
//             className="text-blue-600 font-medium hover:underline"
//           >
//             Login here
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;

import { useContext, useState } from "react";
import { AuthContext } from "../Components/AuthContext";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const RegisterPage = () => {
  const { registerUser, loginWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validatePassword = (pw) =>
    /[a-z]/.test(pw) && /[A-Z]/.test(pw) && pw.length >= 6;

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!validatePassword(password)) {
      toast.error("Password must have 6+ chars with upper & lower case");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      await registerUser(name, email, password, photo);
      toast.success("Registration successful!");
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      toast.success("Logged in with Google!");
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-gradient-to-br from-pink-100 via-orange-100 to-purple-100 p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Register
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            placeholder="Photo URL"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 pr-12"
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

          {/* Confirm Password */}
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 pr-12"
            />
            <span
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <AiFillEyeInvisible size={22} />
              ) : (
                <AiFillEye size={22} />
              )}
            </span>
          </div>

          <button className="w-full py-3 text-white rounded-md bg-gradient-to-b from-[#3B5C5E] to-[#335451] hover:opacity-90">
            Register
          </button>
        </form>

        <div className="flex items-center my-6">
          <hr className="flex-1 border-gray-300" />
          <span className="mx-3 text-gray-500 text-sm">OR</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 py-2 border rounded-lg shadow-sm text-white font-medium bg-gradient-to-b from-[#3B5C5E] to-[#335451] hover:opacity-90"
        >
          <FcGoogle size={24} /> Continue with Google
        </button>

        <p className="mt-4 text-sm text-center">
          Already have an account?{" "}
          <Link
            to="/loginPage"
            className="text-blue-600 font-medium hover:underline"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
