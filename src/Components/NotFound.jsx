import { useNavigate } from "react-router";
import NotFoundImg from "../assets/NotFoundimage.png";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-yellow-50 via-orange-100 to-red-50 p-4">
      <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl max-w-sm w-full p-4 text-center">
        {/* Fun Foodie Image */}
        <img
          src={NotFoundImg}
          alt="404 Not Found"
          className="w-48 mx-auto mb-4 filter brightness-110 contrast-125 saturate-150"
        />

        {/* Heading */}
        <h1 className="text-5xl font-extrabold text-green-600 mb-2">Oops!</h1>

        {/* Main Message */}
        <p className="text-xl font-semibold text-gray-700 mb-2">
          We couldn't find the page you’re looking for.
        </p>

        {/* Sub Text */}
        <p className="text-gray-600 mb-4 text-base">
          Don’t worry, your next delicious meal is just a click away!
        </p>

        {/* Back to Home Button */}
        <button
          onClick={() => navigate("/")}
          className="bg-[#F6C85F] text-black px-5 py-3 rounded-full shadow-lg transition transform hover:scale-105 duration-300 font-semibold"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
