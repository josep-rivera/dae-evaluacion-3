import { Ruler, Weight, Tag } from "lucide-react";

function PokemonCard({ pokemon }) {
  const typeColors = {
    normal: "bg-gray-400",
    fire: "bg-red-500",
    water: "bg-blue-500",
    electric: "bg-yellow-400",
    grass: "bg-green-500",
    ice: "bg-cyan-400",
    fighting: "bg-red-700",
    poison: "bg-purple-500",
    ground: "bg-yellow-600",
    flying: "bg-indigo-400",
    psychic: "bg-pink-500",
    bug: "bg-green-600",
    rock: "bg-yellow-700",
    ghost: "bg-purple-700",
    dragon: "bg-indigo-700",
    dark: "bg-gray-800",
    steel: "bg-gray-500",
    fairy: "bg-pink-300",
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 transform">
      {/* Imagen */}
      <div className="bg-linear-to-br from-purple-100 to-indigo-100 p-6 flex items-center justify-center">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="w-40 h-40 object-contain drop-shadow-lg"
        />
      </div>

      {/* Contenido */}
      <div className="p-6">
        {/* Nombre */}
        <h3 className="text-2xl font-bold text-center text-purple-600 mb-4 capitalize">
          {pokemon.name}
        </h3>

        {/* Información */}
        <div className="space-y-3">
          {/* Altura */}
          <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
            <div className="flex items-center space-x-2">
              <Ruler className="w-5 h-5 text-purple-600" />
              <span className="text-gray-600 font-medium">Altura:</span>
            </div>
            <span className="text-gray-800 font-bold">
              {pokemon.height / 10} m
            </span>
          </div>

          {/* Peso */}
          <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
            <div className="flex items-center space-x-2">
              <Weight className="w-5 h-5 text-purple-600" />
              <span className="text-gray-600 font-medium">Peso:</span>
            </div>
            <span className="text-gray-800 font-bold">
              {pokemon.weight / 10} kg
            </span>
          </div>

          {/* Tipos */}
          <div className="bg-gray-50 p-3 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Tag className="w-5 h-5 text-purple-600" />
              <span className="text-gray-600 font-medium">Tipos:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {pokemon.types.map((type) => (
                <span
                  key={type.type.name}
                  className={`${
                    typeColors[type.type.name] || "bg-gray-400"
                  } text-white px-4 py-1 rounded-full text-sm font-semibold capitalize shadow-md`}
                >
                  {type.type.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
