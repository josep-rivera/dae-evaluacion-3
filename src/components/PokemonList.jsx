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
      .catch(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div className="text-center text-gray-600 text-lg py-10">
        Cargando Pokémon...
      </div>
    );

  return (
    <div className="bg-white rounded-xl shadow p-6 md:p-10">
      <h2 className="text-2xl font-semibold text-gray-900 text-center mb-6">
        Pokémon Destacados
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pokemons.map((pokemon, index) => {
          const Icon = icons[index];
          return (
            <div
              key={pokemon.name}
              className="bg-gray-100 text-gray-800 p-5 rounded-lg shadow hover:shadow-md transition flex flex-col items-center"
            >
              <Icon className="w-8 h-8 mb-2 text-gray-500" />
              <p className="text-lg font-medium capitalize">{pokemon.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PokemonList;
