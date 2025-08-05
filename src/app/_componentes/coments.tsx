"use client";

import Image from "next/image";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useEffect, useState } from "react";

import cliente from "../../../public/cliente.png";
import cliente2 from "../../../public/cliente2.png";
import cliente3 from "../../../public/cliente3.png";

const depoimentos = [
  {
    nome: "Camila Alves",
    cargo: "cliente",
    texto: "Atendimento impecável, ambiente aconchegante e profissionais maravilhosas! Recomendo de olhos fechados!",
    imagem: cliente,
  },
  {
    nome: "Juliana Souza",
    cargo: "cliente",
    texto: "Atendimento impecável, ambiente aconchegante e profissionais maravilhosas! Recomendo de olhos fechados!",
    imagem: cliente2,
  },
  {
    nome: "Fernanda Lima",
    cargo: "cliente",
    texto: "Atendimento impecável, ambiente aconchegante e profissionais maravilhosas! Recomendo de olhos fechados!",
    imagem: cliente3,
  },
];

export function Coments() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    slides: { perView: 1 },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 4000);
    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <section className="py-16 px-4 sm:px-16 bg-rose-100">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-4xl font-semibold text-black mb-6">
          O que nossos clientes dizem
        </h3>
        <p className="text-black text-lg mb-10">
          Veja os comentários dos nossos clientes sobre a visita ao nosso salão.
        </p>

        <div ref={sliderRef} className="keen-slider">
          {depoimentos.map((dep, index) => (
            <div
              key={index}
              className="keen-slider__slide flex flex-col items-center px-4"
            >
              <div className="text-6xl text-rose-300 mb-6">“</div>
              <p className="text-gray-700 text-lg max-w-2xl">{dep.texto}</p>
              <div className="mt-8 flex flex-col items-center">
                <Image
                  src={dep.imagem}
                  alt={dep.nome}
                  width={80}
                  height={80}
                  className="rounded-full mb-2"
                />
                <p className="text-black font-medium">{dep.nome}</p>
                <p className="text-gray-600 text-sm">{dep.cargo}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6 gap-2">
          {depoimentos.map((_, idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={`w-3 h-3 rounded-full ${
                currentSlide === idx ? "bg-rose-500" : "bg-rose-300"
              } transition-all`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
