import Formulario from "../components/Formulario/Formulario";
import ListaParticipantes from "../components/ListaParticipantes";
import Rodape from "../components/Rodape/Rodape";
import Card from "../components/Card/Card";

const Configuracao = () => {
  return (
    <Card>
      <section>
        <h2>Vamos começar!</h2>
        <Formulario />
        <ListaParticipantes />
        <Rodape />
      </section>
    </Card>
  );
};

export default Configuracao;
