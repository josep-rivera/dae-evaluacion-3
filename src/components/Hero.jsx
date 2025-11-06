import { Link } from "react-router-dom";
import { Sparkles, ArrowRight } from "lucide-react";

function Hero() {
  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center transform hover:scale-105 transition-transform duration-300">
      {/* Icono decorativo */}
      <div className="flex justify-center mb-6">
        <div className="bg-linear-to-r from-purple-600 to-indigo-600 p-4 rounded-full">
          <Sparkles className="w-12 h-12 text-white" />
        </div>
      </div>

      {/* Título */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-indigo-600 mb-4">
        PokeDex Explorer
      </h1>

      {/* Descripción */}
      <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
        Explora el fascinante mundo de los Pokémon. Descubre sus
        características, tipos, habilidades y mucho más en esta aplicación
        desarrollada con React y Tailwind CSS.
      </p>

      {/* Botón */}
      <Link
        to="/entities"
        className="inline-flex items-center space-x-2 bg-linear-to-r from-purple-600 to-indigo-600 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
      >
        <span>Ver todos los Pokémon</span>
        <ArrowRight className="w-5 h-5" />
      </Link>
    </div>
  );
}

export default Hero;
