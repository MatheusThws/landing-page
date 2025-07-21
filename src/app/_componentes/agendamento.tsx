'use client'

import { useState } from "react"

export function Agendamento() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
        <section id="agendamento" className="bg-rose-200 py-16 px-6 text-center">
        <h3 className="text-2xl font-semibold text-black mb-4">Agende seu horário</h3>
        <p className="text-black mb-6">Clique abaixo para ver horários disponíveis</p>
        <button
          onClick={() => setShowModal(true)}
          className="bg-rose-600 text-white px-6 py-2 rounded hover:bg-rose-700"
        >
          Ver horários
        </button>
      </section>

        {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-2xl"
            >
              ×
            </button>
            <h4 className="text-xl font-semibold text-rose-800 mb-4">Escolha um horário</h4>
            <ul className="flex flex-col gap-2">
              <li><button className="w-full p-2 bg-rose-200 rounded hover:bg-rose-300">09:00</button></li>
              <li><button className="w-full p-2 bg-rose-200 rounded hover:bg-rose-300">10:00</button></li>
              <li><button className="w-full p-2 bg-rose-200 rounded hover:bg-rose-300">11:00</button></li>
              <li><button className="w-full p-2 bg-rose-200 rounded hover:bg-rose-300">14:00</button></li>
              <li><button className="w-full p-2 bg-rose-200 rounded hover:bg-rose-300">16:00</button></li>
            </ul>
          </div>
        </div>
      )}

    </>
  )
}