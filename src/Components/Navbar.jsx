import { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import { NavLink } from "react-router";
import { IoIosRestaurant } from "react-icons/io";

const Navbar = () => {
  const { user, logoutUser, loading, loginWithGoogle } =
    useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  //  Handle Google Login directly from Navbar
  const handleLogin = async () => {
    try {
      await loginWithGoogle();
      setMenuOpen(false);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) =>
            isActive
              ? "underline text-[#632EE3]"
              : "text-gray-700 hover:underline"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) =>
            isActive
              ? "underline text-[#632EE3]"
              : "text-gray-700 hover:underline"
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) =>
            isActive
              ? "underline text-[#632EE3]"
              : "text-gray-700 hover:underline"
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="bg-base-100 shadow-sm px-5 sticky top-0 z-50">
      <div className="flex items-center justify-between h-16">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-xl font-bold flex items-center justify-center gap-5 j"
        >
          <span className="text-4xl text-gradient-to-b from-[#3B5C5E] to-[#335451] ">
            <IoIosRestaurant />
          </span>
          Foodie
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6">{links}</ul>

        {/* User / Login */}
        <div className="hidden lg:flex items-center space-x-3">
          {loading ? (
            <span>Loading...</span>
          ) : user ? (
            <div className="relative group">
              <img
                src={user?.photoURL || "https://i.ibb.co/5WKPq1Ty/habiba.jpg"}
                alt="user"
                className="w-15 h-15 rounded-full border-2 border-gray-300 cursor-pointer"
              />
              {/* Hover name */}
              <span className="absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 bg-gray-500 text-white text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-200 transition">
                {user.displayName || "User"}
              </span>

              {/* Dropdown */}
              <ul className="absolute right-0 mt-3 p-2 shadow bg-base-100 rounded-box hidden group-hover:block w-40 text-sm">
                <li>
                  <NavLink
                    to="/add-review"
                    className="block py-1 px-3 hover:bg-gray-100"
                  >
                    Add Review
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/my-reviews"
                    className="block py-1 px-3 hover:bg-gray-100"
                  >
                    My Reviews
                  </NavLink>
                </li>
                <li>
                  <button
                    onClick={logoutUser}
                    className="block w-full text-left py-1 px-3 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <button
              onClick={handleLogin}
              className="px-5 py-2 rounded-lg text-white font-medium transition duration-300 bg-gradient-to-b from-[#3B5C5E] to-[#335451] hover:opacity-90"
            >
              Login
            </button>
          )}
        </div>

        {/* Hamburger (Mobile) */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-gray-700 hover:text-[#632EE3]"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-base-100 shadow-md rounded-md p-4 mt-5">
          <ul className="flex flex-col space-y-2">{links}</ul>
          <div className="mt-4">
            {user ? (
              <>
                <NavLink
                  to="/add-review"
                  onClick={() => setMenuOpen(false)}
                  className="block py-2"
                >
                  Add Review
                </NavLink>
                <NavLink
                  to="/my-reviews"
                  onClick={() => setMenuOpen(false)}
                  className="block py-2"
                >
                  My Reviews
                </NavLink>
                <button
                  onClick={() => {
                    logoutUser();
                    setMenuOpen(false);
                  }}
                  className="block py-2 text-left w-full"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={() => {
                  handleLogin();
                  setMenuOpen(false);
                }}
                className="block mt-2 px-5 py-2 rounded-lg text-white font-medium transition duration-300 bg-gradient-to-b from-[#3B5C5E] to-[#335451] hover:opacity-90 w-full"
              >
                Login
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
