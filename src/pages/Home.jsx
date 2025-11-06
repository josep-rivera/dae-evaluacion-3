import Hero from "../components/Hero";
import PokemonList from "../components/PokemonList";

function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="mb-12">
        <Hero />
      </div>

      {/* Lista de Pokémon */}
      <div>
        <PokemonList />
      </div>
    </div>
  );
}

export default Home;
