import { Hero } from "./_componentes/hero";
import { Servicos } from "./_componentes/servicos";
import { Apresentacao } from "./_componentes/apresentacao";
import { Agendamento } from "./_componentes/agendamento";
import { Contato } from "./_componentes/contato";
import { Rodape } from "./_componentes/rodape";
import { Coments } from "./_componentes/coments";
import { Sidebar } from "./_componentes/sidebar";

export default function Home() {
  return (
    <main className="scroll-smooth">
      <Sidebar />
      <Hero />
      <Apresentacao />
      <Servicos />
      <Coments />
      <Agendamento />
      <Contato />
      <Rodape />
    </main>
  );
}
