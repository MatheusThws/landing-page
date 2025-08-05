"use client";

import profi from "../../../public/profi.png";
import Image from "next/image";
import { motion } from "framer-motion";

export function Apresentacao() {
  return (
    <section id="apresentacao" className="relative py-24 px-6 bg-rose-100 overflow-hidden">
      {/* Fundo Decorativo */}
      <svg
        className="absolute bottom-0 right-0 opacity-10 w-96 h-96 pointer-events-none"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#f43f5e"
          d="M51.9,-63.2C66.2,-53.2,75.6,-33.3,75.4,-15.7C75.3,1.9,65.5,17.3,54.6,29.6C43.7,41.9,31.6,51.2,17.3,59.4C3,67.6,-13.4,74.7,-28.7,70.2C-44,65.7,-58.3,49.5,-62.4,32.3C-66.6,15.2,-60.6,-2.9,-54.6,-20.7C-48.6,-38.5,-42.6,-56,-30.5,-67.1C-18.5,-78.1,0,-82.8,18.7,-77.3C37.3,-71.7,55.6,-55.1,51.9,-63.2Z"
          transform="translate(100 100)"
        />
      </svg>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 relative z-10">
        {/* Avatar animado */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-56 h-56 relative rounded-full overflow-hidden shadow-xl border-4 border-white shrink-0"
        >
          <Image
            src={profi}
            alt="Profissional"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Texto */}
        <div className="text-center md:text-left">
          <p className="text-rose-700 font-medium mb-2 text-sm tracking-wide uppercase">
            💄 Transformando autoestima com beleza
          </p>
          <h2 className="text-4xl font-bold text-rose-900 mb-4">Sobre Nós</h2>

          <p className="text-rose-800 text-lg mb-4">
            Com mais de <strong>10 anos de experiência</strong> no ramo da beleza, nossa missão é elevar a autoestima de cada cliente que passa por aqui.
          </p>
          <p className="text-rose-800 text-lg mb-4">
            Atuamos com <strong>excelência, empatia e paixão</strong> pelo que fazemos. Acreditamos que cuidar da beleza é também um ato de autocuidado.
          </p>
          <p className="text-rose-800 text-lg">
            Nosso espaço é <strong>acolhedor, moderno e feito para você</strong>. Cada detalhe é pensado para oferecer conforto, bem-estar e resultados incríveis.
          </p>
        </div>
      </div>
    </section>
  );
}
