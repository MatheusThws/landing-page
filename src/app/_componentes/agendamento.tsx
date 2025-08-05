"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export function Agendamento() {
  const [nome, setNome] = useState("")
  const [horarioSelecionado, setHorarioSelecionado] = useState("")

  const horarios = ["09:00", "10:00", "11:00", "14:00", "16:00"]

  function confirmarAgendamento() {
    if (!nome || !horarioSelecionado) {
      alert("Preencha o nome e selecione um horário.")
      return
    }

    const mensagem = `Olá, meu nome é ${nome} e gostaria de agendar para ${horarioSelecionado}.`
    const whatsappLink = `https://wa.me/5599999999999?text=${encodeURIComponent(mensagem)}`
    window.open(whatsappLink, "_blank")
  }

  return (
    <section id="agendamento" className="bg-rose-100 py-16 px-4 sm:px-16">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h3 className="text-4xl font-bold text-rose-800 mb-2">Agende seu horário</h3>
        <p className="text-gray-700 text-lg">
          Escolha um horário e preencha seus dados para confirmar via WhatsApp.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 bg-white rounded-xl p-6 shadow-lg"
        >
          <h4 className="text-xl font-semibold text-rose-700 mb-4">Seus dados</h4>

          <label className="text-gray-600 mb-1 block">Nome completo</label>
          <input
            type="text"
            placeholder="Digite seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-full mb-4 p-3 border border-rose-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
          />

          <label className="text-gray-600 mb-1 block">Horário escolhido</label>
          <input
            type="text"
            placeholder="Clique em um horário"
            value={horarioSelecionado}
            readOnly
            className="w-full mb-4 p-3 bg-gray-100 border border-rose-200 rounded-lg"
          />

          <button
            onClick={confirmarAgendamento}
            className="w-full bg-rose-600 text-white font-semibold py-3 rounded-lg hover:bg-rose-700 transition duration-200"
          >
            Confirmar Agendamento
          </button>
        </motion.div>

        {/* Coluna de horários */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 bg-white rounded-xl p-6 shadow-lg"
        >
          <h4 className="text-xl font-semibold text-rose-700 mb-4">Horários disponíveis</h4>
          <div className="grid grid-cols-2 gap-4">
            {horarios.map((hora) => (
              <button
                key={hora}
                onClick={() => setHorarioSelecionado(hora)}
                className={`py-3 rounded-lg font-medium border transition-all
                  ${
                    horarioSelecionado === hora
                      ? "bg-rose-500 text-white border-rose-600"
                      : "bg-rose-100 text-rose-700 hover:bg-rose-200 border-rose-200"
                  }`}
              >
                {hora}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
