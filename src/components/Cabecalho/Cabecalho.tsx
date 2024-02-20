import participante from "../../assets/participante.png";
import styles from "./Cabecalho.module.scss";

const Cabecalho = () => {
  return (
    <header className={styles.cabecalho}>
      <div role="separator" className={styles['imagem-logo']}></div>
      <img
        className={styles.participante}
        src={participante}
        alt="Participante"
      ></img>
    </header>
  );
};

export default Cabecalho;
