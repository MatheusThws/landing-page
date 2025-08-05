'use client';

import { useState } from 'react';
import { Menu, X, User, Scissors, CalendarClock, Phone } from 'lucide-react';

export function Sidebar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: '#apresentacao', label: 'Apresentação', icon: <User className="w-5 h-5" /> },
    { href: '#servicos', label: 'Serviços', icon: <Scissors className="w-5 h-5" /> },
    { href: '#agendamento', label: 'Agendamento', icon: <CalendarClock className="w-5 h-5" /> },
    { href: '#contato', label: 'Contato', icon: <Phone className="w-5 h-5" /> },
  ];

  return (
    <>
      {/* Botão hambúrguer */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-4 right-4 z-50 md:hidden bg-white/90 backdrop-blur-lg p-2 rounded-full shadow-lg border border-rose-300 transition hover:scale-105"
        aria-label="Abrir menu"
      >
        <Menu className="w-6 h-6 text-rose-700" />
      </button>

      {/* Drawer lateral */}
      {open && (
        <>
          {/* Overlay escuro com blur */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={() => setOpen(false)}
          />

          {/* Menu lateral */}
          <div className="fixed top-0 left-0 w-64 h-full bg-white z-50 p-6 shadow-2xl flex flex-col gap-6 animate-slide-in">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-rose-700 tracking-tight">Navegação</h2>
              <button
                onClick={() => setOpen(false)}
                className="text-rose-600 hover:text-rose-800"
                aria-label="Fechar menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Links */}
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 text-rose-700 hover:text-white hover:bg-rose-500 px-3 py-2 rounded-md transition font-medium"
              >
                {item.icon}
                {item.label}
              </a>
            ))}
          </div>
        </>
      )}
    </>
  );
}
