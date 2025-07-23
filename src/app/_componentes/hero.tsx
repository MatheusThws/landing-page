import { WhatsappLogoIcon } from '@phosphor-icons/react/dist/ssr'
import { InstagramLogoIcon } from '@phosphor-icons/react/dist/ssr'
import bghero from '../../../public/beleza.png'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative h-[500px] md:h-[500px] lg:h-[800px] overflow-hidden text-white">
      
      <div className="absolute inset-0 -z-10">
        <Image
          src={bghero}
          alt="Foto Hero"
          quality={100}
          fill
          priority
          className="object-cover object-center w-full h-full opacity-100"
        />
      </div>
      <div className="container mx-auto h-full px-6 flex items-center">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-rose-100 drop-shadow-lg">
            Beleza é poder, <br /> Realce a sua com a gente.
          </h1>

          <p className="text-lg md:text-xl text-rose-200 font-medium drop-shadow-md">
            Você merece se sentir incrível todos os dias.
            Porque seu bem-estar vem em primeiro lugar!
            <br />
            <strong className="text-pink-300">Agende agora e viva uma nova experiência de beleza.</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a
              href="#"
              className="bg-pink-400 hover:bg-pink-500 transition px-8 py-3 rounded-lg text-black font-semibold flex items-center justify-center gap-2 shadow-md"
            >
              <WhatsappLogoIcon className="w-5 h-5" />
              Contato via WhatsApp
            </a>

            <a
              href="#"
              className="bg-rose-500 hover:bg-rose-600 transition px-8 py-3 rounded-lg text-black font-semibold flex items-center justify-center gap-2 shadow-md"
            >
              <InstagramLogoIcon className="w-5 h-5" />
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
