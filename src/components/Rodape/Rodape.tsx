// import { useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useListaParticipantes } from "../../state/hook/useListaParticipantes";
import { useSorteador } from "../../state/hook/useSorteador";
import styles from './Rodape.module.scss'
import sacolas from '../../assets/sacolas.png'

const Rodape = () => {
  const participantes = useListaParticipantes();

  const navegar = useNavigate();

  const sortear = useSorteador();

  const iniciar = () => {
    sortear();
    navegar("/sorteio");
  };

  return (
    <footer className={styles['rodape-configuracoes']}>
      <button className={styles.botao} disabled={participantes.length < 3} onClick={iniciar}>
        Iniciar brincadeira
      </button>
      <img src={sacolas} alt="Sacolas de compras"></img>
    </footer>
  );
};

export default Rodape;
