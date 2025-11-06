import { Link } from "react-router-dom";
import { Sparkles, ArrowRight } from "lucide-react";

function Hero() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-10 md:p-16 text-center mx-4 md:mx-0">
      <div className="flex justify-center mb-6">
        <Sparkles className="w-10 h-10 text-gray-400" />
      </div>

      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        PokeDex Explorer
      </h1>

      <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
        Explora el mundo de los Pokémon de forma clara y ordenada. Descubre sus
        tipos, habilidades y estadísticas principales.
      </p>

      <Link
        to="/entities"
        className="inline-flex items-center space-x-3 bg-gray-800 hover:bg-gray-900 text-white font-semibold text-lg px-6 py-3 rounded-lg shadow transition"
      >
        <span>Ver todos los Pokémon</span>
        <ArrowRight className="w-5 h-5" />
      </Link>
    </div>
  );
}

export default Hero;
