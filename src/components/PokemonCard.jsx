import { Ruler, Weight, Tag } from "lucide-react";

function PokemonCard({ pokemon }) {
  const typeColors = {
    normal: "bg-gray-300",
    fire: "bg-red-400",
    water: "bg-blue-400",
    electric: "bg-yellow-400",
    grass: "bg-green-400",
    ice: "bg-cyan-200",
    fighting: "bg-red-600",
    poison: "bg-purple-400",
    ground: "bg-yellow-600",
    flying: "bg-blue-300",
    psychic: "bg-pink-400",
    bug: "bg-green-600",
    rock: "bg-gray-500",
    ghost: "bg-purple-700",
    dragon: "bg-indigo-600",
    dark: "bg-gray-700",
    steel: "bg-gray-400",
    fairy: "bg-pink-200",
  };

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition transform duration-200">
      <div className="p-6 flex items-center justify-center bg-gray-50">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="w-32 h-32 object-contain"
        />
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-900 mb-3 capitalize text-center">
          {pokemon.name}
        </h3>

        <div className="space-y-2">
          <div className="flex items-center justify-between bg-gray-50 p-2 rounded">
            <div className="flex items-center gap-1">
              <Ruler className="w-4 h-4 text-gray-600" />
              <span className="text-gray-600 text-sm">Altura</span>
            </div>
            <span className="text-gray-800 font-medium">
              {pokemon.height / 10} m
            </span>
          </div>

          <div className="flex items-center justify-between bg-gray-50 p-2 rounded">
            <div className="flex items-center gap-1">
              <Weight className="w-4 h-4 text-gray-600" />
              <span className="text-gray-600 text-sm">Peso</span>
            </div>
            <span className="text-gray-800 font-medium">
              {pokemon.weight / 10} kg
            </span>
          </div>

          <div className="bg-gray-50 p-2 rounded">
            <div className="flex items-center gap-1 mb-1">
              <Tag className="w-4 h-4 text-gray-600" />
              <span className="text-gray-600 text-sm">Tipos</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {pokemon.types.map((type) => (
                <span
                  key={type.type.name}
                  className={`${
                    typeColors[type.type.name] || "bg-gray-300"
                  } text-white px-3 py-1 rounded-full text-xs font-medium`}
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
