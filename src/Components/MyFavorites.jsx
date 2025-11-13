import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { toast } from "react-toastify";
import { Navigate } from "react-router";

const MyFavorites = () => {
  const { user } = useContext(AuthContext);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchFavorites = async () => {
    if (!user) return;
    setLoading(true);

    try {
      const res = await fetch(
        `https://local-food-lovers-network-foodie-se.vercel.app/favorites/user/${encodeURIComponent(
          user.email
        )}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      const data = await res.json();

      const sorted = data.sort((a, b) => new Date(b.date) - new Date(a.date));
      setFavorites(sorted);
    } catch (error) {
      console.error("Failed to fetch favorites:", error);
      toast.error("Failed to fetch favorites!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFavorites();
  }, [user]);

  const handleRemoveFavorite = async (_id) => {
    if (!window.confirm("Remove this favorite?")) return;

    try {
      const res = await fetch(
        `https://local-food-lovers-network-foodie-se.vercel.app/favorites/${_id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        }
      );
      const data = await res.json();

      if (data.success) {
        setFavorites((prev) => prev.filter((fav) => fav._id !== _id));
        toast.success("Removed from favorites!");
      } else {
        toast.error(data.message || "Failed to remove favorite");
      }
    } catch (error) {
      console.error("Failed to remove favorite:", error);
      toast.error("Failed to remove favorite");
    }
  };

  if (!user) return <Navigate to="/loginPage" />;

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-6 text-green-600">
        My Favorites
      </h2>

      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : favorites.length === 0 ? (
        <p className="text-center text-gray-500">No favorites yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((fav) => (
            <div
              key={fav._id}
              className="bg-white rounded-xl border shadow-md hover:shadow-lg overflow-hidden flex flex-col transition"
            >
              <img
                src={fav.photo}
                alt={fav.foodName}
                className="w-full h-56 object-cover"
              />
              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-semibold">{fav.foodName}</h3>
                  <p className="text-gray-700">{fav.restaurantName}</p>
                  <p className="text-gray-500 text-sm">{fav.location}</p>
                  <p className="text-yellow-500 font-semibold">
                    ⭐ {fav.rating}
                  </p>
                  <p className="text-gray-400 text-xs mt-1">
                    Added: {new Date(fav.date).toLocaleString()}
                  </p>
                </div>
                <button
                  onClick={() => handleRemoveFavorite(fav._id)}
                  className="px-4 py-2 rounded-md bg-[#F6C85F] text-black font-medium hover:brightness-95 w-full mt-3 transition"
                >
                  Remove from Favorites
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyFavorites;
