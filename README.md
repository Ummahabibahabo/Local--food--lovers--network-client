# 🍽️ Local Food Lovers Network

**Live Site:** [https://your-live-site.netlify.app](https://your-live-site.netlify.app)  
**Client Repo:** [https://github.com/Ummahabibahabo/Local--food--lovers--network-client.git]  
**Server Repo:** [https://github.com/Ummahabibahabo/Local--food--lovers--network-foodie-server.git]

---

## 📖 Project Overview

**Local Food Lovers Network** is a **Full-Stack MERN Application** built for food enthusiasts who love exploring **local restaurants, street food, and homemade dishes**.  
Users can share their food experiences, post reviews with images, and explore what others are enjoying nearby.  
It’s a **community-driven platform** that celebrates local flavor, honest reviews, and passionate food lovers.

---

## ✨ Key Features

- 🍜 **Add & Share Reviews:** Post food reviews with photos, restaurant info, and ratings.
- 🔍 **Search Reviews:** Search reviews by food name (server-side search using MongoDB `$regex`).
- ❤️ **Favorite System:** Add or remove reviews to “My Favorites” using the heart button.
- ✏️ **Edit & Delete Reviews:** Manage your reviews with edit and delete options.
- 🔐 **Authentication:** Firebase login system (Email/Password + Google login).
- 🧭 **Protected Routes:** Users stay logged in after page reload.
- 🧾 **Toasts for Notifications:** Error/success messages shown with `react-toastify`.
- 📱 **Responsive UI:** Optimized for desktop, tablet, and mobile.
- ❌ **Custom 404 Page:** Creative error page with “Back to Home” button.

---

## 🧩 Pages & Functionalities

### 🏠 Homepage

- Hero slider with food-related banners and text.
- Featured Reviews: shows 6 top-rated reviews from MongoDB.
- Two additional static/dynamic sections related to food culture or local experience.

### 🔐 Authentication

- Register: Name, Email, Photo URL, Password, Confirm Password.
- Password must contain uppercase, lowercase, and at least 6 characters.
- Google Sign-In available.
- Login redirects to home or intended route.

### 🍴 Add Review (Protected)

- User can post a review including: Food Name, Image, Restaurant Name, Location, Rating, and Text.
- Saves logged-in user’s email and date.

### 📚 All Reviews (Public)

- Displays all reviews sorted by newest first.
- Includes a search bar using MongoDB `$regex`.
- Each review has a heart button to add to favorites.

### 🧾 My Reviews (Protected)

- Shows logged-in user’s reviews in table view:  
  **Photo | Food Name | Restaurant Name | Date | Time | Actions**
- Delete review with confirmation modal.
- Edit review redirects to an edit form pre-filled with existing data.

### ❤️ My Favorites (Protected)

- Displays all reviews the user has added as favorites.
- Card or table layout depending on design.
- Optional: Remove from favorites button.

### 🚫 404 Page

- Custom-designed page with image and “Back to Home” button.

---

## 🧰 Technologies Used

### Frontend:

- React.js (Vite)
- React Router DOM
- Firebase Authentication
- React Toastify
- React Icons
- Tailwind CSS
- Framer Motion (for animations)
- TanStack Query _(optional)_

### Backend:

- Node.js
- Express.js
- MongoDB
- CORS
- Dotenv
- Deployed on Vercel

---

## ⚙️ Installation Guide

### 🖥️ Client Side

```bash
git clone https://github.com/your-username/local-food-lovers-client.git
cd local-food-lovers-client
npm install
npm run dev


🌐 Server Side
git clone https://github.com/your-username/local-food-lovers-server.git
cd local-food-lovers-server
npm install
npm start


🔑 Environment Variables (Server)

Create a .env file and add:
PORT=3000
MONGODB_URI=your_mongodb_connection_string

📦 Database Collections
🥗 reviews

foodName

photo

restaurantName

location

rating

reviewText

userEmail

date

❤️ favorites

userEmail

reviewId

foodName

restaurantName

rating

photo

date



🧠 Git Commit Requirements

✅ Client Side: Minimum 15 notable commits
✅ Server Side: Minimum 8 notable commits

Example commit messages:

“Implemented favorite system using MongoDB”

“Added Firebase authentication with Google login”

“Created All Reviews page with MongoDB search”

“Styled homepage and hero section with Tailwind”

“Improved responsive design for mobile”

🚀 Deployment

Client: Hosted on Netlify / Surge / Firebase

Server: Hosted on Vercel

Firebase authentication domain added for Netlify/Surge

🎨 Design Guidelines Followed

Consistent heading styles and colors

Equal card sizes and grid spacing

Responsive across all devices

Unified button styles

Used latest X (Twitter) logo for social icons

💬 Author

👩‍💻 Umma Habiba
MERN Stack Developer passionate about building creative and community-focused web applications that connect people through local food culture.
```
