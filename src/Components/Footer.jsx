// import React from "react";
// import { NavLink } from "react-router-dom";
// import { IoIosRestaurant } from "react-icons/io";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaTwitter,
//   FaLinkedinIn,
// } from "react-icons/fa";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { IoIosRestaurant } from "react-icons/io";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="mt-12 text-gray-100">
      {/* Top area: gradient background matching your navbar */}
      <div className="bg-gradient-to-b from-[#3B5C5E] to-[#335451] px-6 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand / Logo */}
          <div className="flex flex-col items-start gap-3">
            <NavLink to="/" className="flex items-center gap-3">
              <IoIosRestaurant className="text-3xl" />
              <span className="text-2xl font-bold">Foodie</span>
            </NavLink>
            <p className="text-sm text-gray-200 max-w-xs">
              Discover and share the best bites around you — honest reviews, top
              restaurants and the tastiest food photos.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a
                href="#"
                aria-label="facebook"
                className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                aria-label="instagram"
                className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                aria-label="twitter"
                className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                aria-label="linkedin"
                className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3">Quick links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink to="/" className="hover:underline">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="hover:underline">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/all-reviews" className="hover:underline">
                  All Reviews
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="hover:underline">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Support / Account */}
          <div>
            <h4 className="font-semibold mb-3">Account</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink to="/add-review" className="hover:underline">
                  Add Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/my-reviews" className="hover:underline">
                  My Reviews
                </NavLink>
              </li>
              <li>
                <NavLink to="/favorites" className="hover:underline">
                  My Favorites
                </NavLink>
              </li>
              <li>
                <NavLink to="/loginPage" className="hover:underline">
                  Login / Register
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Newsletter / Contact */}
          <div>
            <h4 className="font-semibold mb-3">Stay in touch</h4>
            <p className="text-sm text-gray-200 mb-3">
              Subscribe for new reviews, featured restaurants &amp; food tips.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-2"
              aria-label="newsletter-form"
            >
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 rounded-md bg-white/10 placeholder:text-gray-200 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-md bg-[#F6C85F] text-black font-medium hover:brightness-95 transition"
              >
                Subscribe
              </button>
            </form>

            <div className="mt-4 text-sm text-gray-300">
              <p>
                <span className="font-medium">Contact:</span>{" "}
                hello@foodie.example
              </p>
              <p className="mt-1">Phone: +880-1234-567890</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom area: copyright */}
      <div className="bg-[#2b3a3a] px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-sm text-gray-300">
          <p>© {new Date().getFullYear()} Foodie. All rights reserved.</p>
          <div className="mt-3 md:mt-0 flex items-center gap-4">
            <NavLink to="/terms" className="hover:underline">
              Terms
            </NavLink>
            <NavLink to="/privacy" className="hover:underline">
              Privacy
            </NavLink>
            <NavLink to="/sitemap" className="hover:underline">
              Sitemap
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
