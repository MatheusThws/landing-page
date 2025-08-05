"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { Scissors, Sparkles, Eye, Wand2, Droplets, Brush } from "lucide-react";
import { ReactNode } from "react";

import unha from "../../../public/serviço.png";
import cabelo from "../../../public/cabelo.jpg";
import sobran from "../../../public/sobran.jpg";
import massagem from "../../../public/massagem.jpg";
import maquiagem from "../../../public/maquiagem.jpeg";
import depilacao from "../../../public/depilação.jpg";

interface Servico {
  imagem: StaticImageData;
  titulo: string;
  descricao: string;
  detalhes: string;
  icone: ReactNode;
}

export function Servicos() {
  const servicos: Servico[] = [
    {
      imagem: cabelo,
      titulo: "Corte Feminino",
      descricao: "Cortes modernos, clássicos ou personalizados para realçar sua beleza.",
      detalhes: "Inclui lavagem, hidratação e finalização. Valor: R$ 50,00 a R$ 80,00.",
      icone: <Scissors className="w-5 h-5 text-rose-600 mr-2" />,
    },
    {
      imagem: unha,
      titulo: "Manicure & Pedicure",
      descricao: "Cuidado completo para suas mãos e pés com higiene e estilo.",
      detalhes: "Esmaltação, remoção de cutículas e hidratação. Valor: R$ 30,00 a R$ 60,00.",
      icone: <Sparkles className="w-5 h-5 text-rose-600 mr-2" />,
    },
    {
      imagem: sobran,
      titulo: "Sobrancelha Design",
      descricao: "Modelagem personalizada para realçar seu olhar com perfeição.",
      detalhes: "Design com pinça e linha, podendo incluir henna. Valor: R$ 25,00 a R$ 40,00.",
      icone: <Eye className="w-5 h-5 text-rose-600 mr-2" />,
    },
    {
      imagem: massagem,
      titulo: "Massagem Relaxante",
      descricao: "Reduza o estresse e renove suas energias com nossas técnicas relaxantes.",
      detalhes: "Massagem com óleos essenciais. Sessão de 50 min. Valor: R$ 90,00 a R$ 130,00.",
      icone: <Wand2 className="w-5 h-5 text-rose-600 mr-2" />,
    },
    {
      imagem: maquiagem,
      titulo: "Maquiagem Profissional",
      descricao: "Ideal para eventos especiais, realçando sua beleza com elegância.",
      detalhes: "Maquiagem social ou glam. Valor: R$ 80,00 a R$ 150,00.",
      icone: <Brush className="w-5 h-5 text-rose-600 mr-2" />,
    },
    {
      imagem: depilacao,
      titulo: "Depilação",
      descricao: "Procedimentos suaves e higiênicos com resultados duradouros.",
      detalhes: "Cera quente/fria. Regiões variadas. Valor: R$ 20,00 a R$ 80,00.",
      icone: <Droplets className="w-5 h-5 text-rose-600 mr-2" />,
    },
  ];

  return (
    <section id= "servicos" className="py-20 px-6 bg-rose-100 text-black">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-rose-900 mb-12"
        >
          Você encontra aqui
        </motion.h3>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {servicos.map((servico, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 flex flex-col items-center"
            >
              <div className="relative w-full h-56 rounded-xl overflow-hidden mb-4">
                <Image
                  src={servico.imagem}
                  alt={servico.titulo}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h4 className="text-lg font-semibold text-rose-800 mb-1 flex items-center">
                {servico.icone}
                {servico.titulo}
              </h4>
              <p className="text-gray-500 text-sm mb-3 px-2">{servico.descricao}</p>
              <div className="bg-rose-50 border border-rose-200 text-rose-700 text-sm font-semibold px-4 py-2 rounded-lg shadow-sm">
                {servico.detalhes}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
