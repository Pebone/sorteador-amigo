import { useState } from "react";
import { useListaParticipantes } from "../../state/hook/useListaParticipantes";
import { useResultadoSorteio } from "../../state/hook/useResultadoSorteio";
import styles from "./Sorteio.module.scss";
import Card from "../../components/Card/Card";
import aviao from "../../assets/aviao.png";

const Sorteio = () => {
  const participantes = useListaParticipantes();

  const [participanteDaVez, setParticipanteDaVez] = useState("");
  const [amigoSecreto, setAmigoSecreto] = useState("");

  const resultado = useResultadoSorteio();

  const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    if (resultado.has(participanteDaVez)) {
      setAmigoSecreto(resultado.get(participanteDaVez)!);
    }
  };

  return (
    <Card>
      <section className={styles.sorteio}>
        <h2>Quem vai tirar o papelzinho?</h2>
        <form onSubmit={sortear}>
          <select
            required
            placeholder="Selecione o seu nome"
            name="participantesDaVez"
            id="participanteDaVez"
            value={participanteDaVez}
            onChange={(evento) => setParticipanteDaVez(evento.target.value)}
          >
            <option>Selecione o seu nome</option>
            {participantes.map((participante) => (
              <option key={participante}>{participante}</option>
            ))}
          </select>
          <p>Clique em em sortear para ver quem é seu amigo secreto!</p>
          <button className={styles["botao-sortear"]}>Sortear</button>
        </form>
        {amigoSecreto && (
          <p className={styles.resultado} role="alert">
            {amigoSecreto}
          </p>
        )}
        <footer className={styles.sorteio}>
          <img
            src={aviao}
            className={styles.aviao}
            alt="Um desenho de um avião de papel"
          />
        </footer>
      </section>
    </Card>
  );
};

export default Sorteio;
