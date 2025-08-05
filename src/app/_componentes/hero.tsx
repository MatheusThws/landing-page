'use client';

import Image from 'next/image';
import { WhatsappLogoIcon, InstagramLogoIcon } from '@phosphor-icons/react/dist/ssr';
import { motion } from 'framer-motion';
import bghero from '../../../public/beleza.png';

export function Hero() {
  return (
    <section className="relative h-[500px] md:h-[600px] lg:h-[800px] text-white overflow-hidden scroll-smooth">
      
      {/* Imagem de fundo */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={bghero}
          alt="Foto Hero"
          fill
          priority
          quality={100}
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      </div>

      <div className="container mx-auto h-full px-6 flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-xl leading-tight"
          >
            Beleza é poder, <br />
            <span className="text-pink-300">Realce a sua com a gente.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-200 drop-shadow-md"
          >
            Você merece se sentir incrível todos os dias. <br />
            Porque <strong>seu bem-estar vem em primeiro lugar!</strong><br />
            <span className="text-pink-300 font-semibold">
              Agende agora e viva uma nova experiência de beleza.
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mt-4"
          >
            <a
              href="https://wa.me/5511998765432?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20com%20voc%C3%AAs."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-400 hover:bg-pink-500 transition-all px-6 py-3 rounded-lg text-black font-semibold flex items-center justify-center gap-2 shadow-md"
          >
              <WhatsappLogoIcon className="w-5 h-5" />
                 Contato via WhatsApp
            </a>

            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-rose-200 transition-all px-6 py-3 rounded-lg text-rose-600 font-semibold flex items-center justify-center gap-2 shadow-md"
            >
              <InstagramLogoIcon className="w-5 h-5" />
              Instagram
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
