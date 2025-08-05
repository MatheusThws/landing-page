'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import {
  InstagramLogoIcon,
  FacebookLogoIcon,
  YoutubeLogoIcon,
  TiktokLogoIcon,
} from '@phosphor-icons/react/dist/ssr';
import Image from 'next/image';
import patrocinador1 from '../../../public/patrocinador1.png';
import patrocinador2 from '../../../public/patrocinador2.png';

export function Contato() {
  return (
    <section
      id="contato"
      className="py-20 px-6 bg-rose-100 text-center text-black"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto space-y-12"
      >
        {/* Título e descrição */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Fale Conosco</h2>
          <p className="text-lg text-gray-800">
            Estamos disponíveis para tirar dúvidas, agendar horários ou receber feedbacks. <br />
            Entre em contato da forma que preferir:
          </p>
        </motion.div>

        {/* Informações de contato */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-3 text-left"
        >
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <Phone className="w-6 h-6 text-rose-600 stroke-2" />
            <span className="text-gray-800">(11) 98765-4321</span>
          </div>
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <Mail className="w-6 h-6 text-rose-600 stroke-2" />
            <span className="text-gray-800">contato@salaoelegancia.com.br</span>
          </div>
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <MapPin className="w-6 h-6 text-rose-600 stroke-2" />
            <span className="text-gray-800">Rua Elegante, 123 - Centro</span>
          </div>
        </motion.div>

        {/* Patrocinadores */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <h3 className="text-xl font-semibold mb-4 text-gray-900">
            Nossos Patrocinadores
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Image
              src={patrocinador1}
              alt="Patrocinador 1"
              className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
            />
            <Image
              src={patrocinador2}
              alt="Patrocinador 2"
              className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        </motion.div>

        {/* Redes sociais */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <h3 className="text-lg font-semibold mb-3 text-gray-800">Siga nas redes sociais</h3>
          <div className="flex justify-center gap-6 text-rose-700">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-rose-900 transition"
              aria-label="Instagram"
            >
              <InstagramLogoIcon className="w-7 h-7" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-rose-900 transition"
              aria-label="Facebook"
            >
              <FacebookLogoIcon className="w-7 h-7" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-rose-900 transition"
              aria-label="TikTok"
            >
              <TiktokLogoIcon className="w-7 h-7" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-rose-900 transition"
              aria-label="YouTube"
            >
              <YoutubeLogoIcon className="w-7 h-7" />
            </a>
          </div>
        </motion.div>

        {/* Rodapé */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.4 }}
          viewport={{ once: true }}
          className="mt-10 text-sm text-gray-700"
        >
          © {new Date().getFullYear()} Salão Elegância. Todos os direitos reservados.
        </motion.div>
      </motion.div>
    </section>
  );
}
