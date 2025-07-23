 import cliente from "../../../public/cliente.png"
 import Image from "next/image"
 
 export function Coments (){
    return(
        <section className="py-16 px-16 bg-rose-100">
            <div className="max-w-4x1 mx-auto text-center">
                <h3 className="text-4xl font-semibold text-black mb-10">O que nossos clientes dizem</h3>
                <p className="text-black text-lg">Veja os comentários dos nossos clientes sobre a visita ao nosso Salão.</p>
                <div className="flex flex-col items-center">
                    <div className="text-6xl text-rose-300 mb-6">*</div>

                    <p className="text-gray-700 text-lg max-w-2x1">
                      Atendimento impecável, ambiente aconchegante e profissionais maravilhosas! Senti-me valorizada em cada detalhe. Recomendo de olhos fechados!
                    </p>
                    <div className="mt-8 flex flex-col items-center">
                    <Image
                        src={cliente}
                        alt="cliente satisfeita"
                        width={80}
                        height={80}
                        className="rounded-full mb-2"
                        />
                        <p className="text-black font-medium">Camila Alves</p>
                        <p className="text-gray-600 text-sm">Cliente</p>
                    </div>
                </div>
            </div>
        </section>
        
    )
 }