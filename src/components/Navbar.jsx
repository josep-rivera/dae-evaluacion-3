import { Link, useLocation } from "react-router-dom";
import { Home, Grid3x3 } from "lucide-react";

function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path
      ? "bg-white/20 text-white"
      : "text-white/80 hover:text-white hover:bg-white/10";
  };

  return (
    <nav className="bg-white/10 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 p-2 rounded-lg">
              <Grid3x3 className="w-6 h-6 text-white" />
            </div>
            <span className="text-white text-xl font-bold">
              PokeDex Explorer
            </span>
          </div>

          {/* Links */}
          <div className="flex space-x-4">
            <Link
              to="/"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${isActive(
                "/"
              )}`}
            >
              <Home className="w-5 h-5" />
              <span>Home</span>
            </Link>
            <Link
              to="/entities"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${isActive(
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
