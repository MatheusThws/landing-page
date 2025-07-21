import unha from '../../../public/serviço.png'
import cabelo from '../../../public/cabelo.jpg'
import sobran from '../../../public/sobran.jpg'
import Image from "next/image";


export function Servicos() {
  return (
    <section className="py-16 px-6 bg-rose-100">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-xl font-semibold text-black mb-10">Você encontra aqui:</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-pink-200 p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
            <div className="relative w-[250px] h-[200px] mx-auto">
              <Image
                src={cabelo}
                alt="Corte Feminino"
                fill
                className="rounded-md object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h4 className="mt-3 text-rose-800 font-semibold">Corte Feminino</h4>
          </div>

          <div className="bg-pink-200 p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
            <div className="relative w-[250px] h-[200px] mx-auto">
              <Image
                src={unha}
                alt="Manicure e Pedicure"
                fill
                className="rounded-md object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h4 className="mt-3 text-rose-800 font-semibold">Manicure & Pedicure</h4>
          </div>
          <div className="bg-pink-200 p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
            <div className="relative w-[250px] h-[200px] mx-auto">
              <Image
                src={sobran}
                alt="Sobrancelha"
                fill
                className="rounded-md object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h4 className="mt-3 text-rose-800 font-semibold">Sobrancelha Design</h4>
          </div>
        </div>
      </div>
    </section>
  );
}