import { useState, useEffect } from "react";
import { Zap, Flame, Droplet, Leaf, Snowflake, Star } from "lucide-react";

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  const icons = [Zap, Flame, Droplet, Leaf, Snowflake, Star];

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=6")
      .then((res) => res.json())
      .then((data) => {
        setPokemons(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="text-center text-white text-xl">Cargando Pokémon...</div>
    );
  }

  return (
    <div className="bg-white/95 rounded-3xl shadow-2xl p-8">
      <h2 className="text-3xl font-bold text-center text-purple-600 mb-6">
        Pokémon Destacados
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {pokemons.map((pokemon, index) => {
          const Icon = icons[index];
          return (
            <div
              key={pokemon.name}
              className="bg-linear-to-br from-purple-500 to-indigo-600 text-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <div className="flex flex-col items-center space-y-3">
                <Icon className="w-10 h-10" />
                <p className="text-xl font-bold capitalize">{pokemon.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PokemonList;
