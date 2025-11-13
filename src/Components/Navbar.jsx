import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { NavLink } from "react-router";
import { IoIosRestaurant } from "react-icons/io";

// Theme Toggle Component
const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (e) => {
    setTheme(e.target.checked ? "dark" : "light");
  };

  return (
    <label className="flex items-center space-x-2 py-1 px-2 cursor-pointer">
      <span className="text-sm text-white">Dark Mode</span>
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={handleTheme}
        className="toggle"
      />
    </label>
  );
};

// Navbar Component
const Navbar = () => {
  const { user, logoutUser, loading, loginWithGoogle } =
    useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLogin = async () => {
    try {
      await loginWithGoogle();
      setMenuOpen(false);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "block py-2 px-3 text-white font-medium underline decoration-2 underline-offset-4"
      : "block py-2 px-3 text-white font-medium hover:underline hover:decoration-2 hover:underline-offset-4";

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          onClick={() => setMenuOpen(false)}
          className={navLinkStyle}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allReviews"
          onClick={() => setMenuOpen(false)}
          className={navLinkStyle}
        >
          All Reviews
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/my-favorites"
          onClick={() => setMenuOpen(false)}
          className={navLinkStyle}
        >
          My Favorites
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="bg-gradient-to-r from-[#0F3443] via-[#2C5364] to-[#203A43] shadow-md px-5 sticky top-0 z-50 text-white">
      <div className="flex items-center justify-between h-16">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3 flex-shrink-0">
          <span className="text-4xl sm:text-5xl text-[#F0E68C] drop-shadow-lg inline-block">
            <IoIosRestaurant />
          </span>
          <p className="text-xl sm:text-2xl font-bold tracking-wide">Foodie</p>
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6 font-medium">{links}</ul>

        {/* Desktop User/Login */}
        <div className="hidden lg:flex items-center space-x-3">
          {loading ? (
            <span>Loading...</span>
          ) : user ? (
            <div className="relative group">
              <img
                src={user?.photoURL || "https://i.ibb.co/5WKPq1Ty/habiba.jpg"}
                alt="user"
                className="w-12 h-12 rounded-full border-2 border-[#E0F7EF] cursor-pointer hover:scale-105 transition"
              />
              <span className="absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 bg-[#3A7D6D] text-white text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition">
                {user.displayName || "User"}
              </span>

              {/* Dropdown */}
              <ul className="absolute right-0 mt-3 p-2 shadow bg-[#F0E68C] text-gray-900 rounded-md hidden group-hover:block w-40 text-sm z-50 space-y-1">
                <li>
                  <NavLink to="/add-review" className={navLinkStyle}>
                    Add Review
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/my-reviews" className={navLinkStyle}>
                    My Reviews
                  </NavLink>
                </li>
                <li>
                  <ThemeToggle />
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
              className="px-4 py-2 rounded-md bg-[#F6C85F] text-black font-medium hover:brightness-95 transition"
            >
              Login
            </button>
          )}
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-white hover:text-[#F0E68C]"
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
        <ul className="lg:hidden flex flex-col space-y-2 mt-2 bg-[#203A43] p-4 rounded-md shadow-md">
          {/* User Info */}
          {user && (
            <div className="flex items-center gap-3 mb-2">
              <img
                src={user.photoURL || "https://i.ibb.co/5WKPq1Ty/habiba.jpg"}
                alt="user"
                className="w-10 h-10 rounded-full border-2 border-[#E0F7EF]"
              />
              <span className="text-white">{user.displayName || "User"}</span>
            </div>
          )}

          {/* Links */}
          {links}

          {/* Add Review / My Reviews / ThemeToggle / Logout */}
          {user ? (
            <>
              <NavLink
                to="/add-review"
                className={navLinkStyle}
                onClick={() => setMenuOpen(false)}
              >
                Add Review
              </NavLink>
              <NavLink
                to="/my-reviews"
                className={navLinkStyle}
                onClick={() => setMenuOpen(false)}
              >
                My Reviews
              </NavLink>
              <ThemeToggle />
              <button
                onClick={logoutUser}
                className="py-2 px-3 bg-[#F6C85F] rounded-md text-black font-medium"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={handleLogin}
              className="py-2 px-3 bg-[#F6C85F] rounded-md text-black font-medium"
            >
              Login
            </button>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
