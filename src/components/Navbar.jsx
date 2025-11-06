import { Link, useLocation } from "react-router-dom";
import { Home, Grid3x3 } from "lucide-react";

function Navbar() {
  const location = useLocation();
  const isActive = (path) =>
    location.pathname === path
      ? "bg-gray-200 text-gray-900"
      : "text-gray-700 hover:text-gray-900 hover:bg-gray-100";

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gray-100 p-2 rounded-lg">
              <Grid3x3 className="w-6 h-6 text-gray-800" />
            </div>
            <span className="text-gray-800 text-xl font-bold">
              PokeDex Explorer
            </span>
          </div>

          {/* Links */}
          <div className="flex space-x-4">
            <Link
              to="/"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition ${isActive(
                "/"
              )}`}
            >
              <Home className="w-5 h-5" />
              <span>Home</span>
            </Link>
            <Link
              to="/entities"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition ${isActive(
                "/entities"
              )}`}
            >
              <Grid3x3 className="w-5 h-5" />
              <span>Pokémon</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
