import { useListaParticipantes } from "./useListaParticipantes";
import { resultadoAmigoSecreto } from "../atom";
import { useSetRecoilState } from "recoil";
import { realizarSorteio } from "../helpers/realizarSorteio";

export const useSorteador = () => {
  const participantes = useListaParticipantes();

  const setResultado = useSetRecoilState(resultadoAmigoSecreto);

  return () => {

    const resultado = realizarSorteio(participantes)

    setResultado(resultado);
  };
};
