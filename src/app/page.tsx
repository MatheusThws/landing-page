import { Hero } from "./_componentes/hero";
import {Servicos} from"./_componentes/servicos"
import {Apresentacao} from "./_componentes/apresentacao";
import {Agendamento} from "./_componentes/agendamento";
import {Contato} from "./_componentes/contato";
import {Rodape} from './_componentes/rodape';
import {Coments} from "./_componentes/coments";

export default function Home(){
  return(
    <main>
      <Hero/>
      <Apresentacao/>
      <Servicos/>
      <Coments/>
      <Agendamento/>
      <Contato/>
      <Rodape/>
    </main>
  )
}