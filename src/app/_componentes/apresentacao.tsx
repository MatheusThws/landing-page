'use client'

import profi from '../../../public/profi.png'
import Image from 'next/image'

export function Apresentacao() {
  return (
    <section id="apresentacao" className="py-20 px-5 bg-rose-100">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
         <div className="w-56 h-56 relative rounded-full overflow-hidden shadow-lg border-4 border-white shrink-0">
          <Image
            src={profi}
            alt="Profissional"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h2 className="text-4xl font-semibold text-rose-900 mb-2">Sobre Nós</h2>
          <p className="text-rose-900 text-lg">
            Profissional com mais de 10 anos de experiência, apaixonada por transformar a autoestima das clientes.
            Ambiente acolhedor, moderno e dedicado à sua beleza.
          </p>
        </div>

      </div>
    </section>
  )
}
