import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import Rodape from "./Rodape";
import { useListaParticipantes } from "../../state/hook/useListaParticipantes";

jest.mock("../../state/hook/useListaParticipantes", () => {
  return {
    useListaParticipantes: jest.fn(),
  };
});

const mockNavegacao = jest.fn();

jest.mock("react-router-dom", () => {
  return {
    useNavigate: () => mockNavegacao,
  };
});

const mockSorteio = jest.fn();

jest.mock("../../state/hook/useSorteador", () => {
  return {
    useSorteador: () => mockSorteio,
  };
});

describe("onde não existem participantes suficientes", () => {
  beforeEach(() => {
    (useListaParticipantes as jest.Mock).mockReturnValue([]);
  });
  test("a brincadeira não pode ser iniciada", () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    );

    const botao = screen.getByRole("button");

    expect(botao).toBeDisabled();
  });
});

describe("quando existem participantes suficientes", () => {
  beforeEach(() => {
    (useListaParticipantes as jest.Mock).mockReturnValue([
      "Ana",
      "Catarina",
      "Josefina",
    ]);
  });
  test("a binrcadeira pode ser iniciada", () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    );

    const botao = screen.getByRole("button");
    expect(botao).not.toBeDisabled();
  });
  test("a brincadeira foi iniciada", () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    );

    const botao = screen.getByRole("button");

    fireEvent.click(botao);
    expect(mockNavegacao).toHaveBeenCalledTimes(1);
    expect(mockNavegacao).toHaveBeenCalledWith("/sorteio");
    expect(mockNavegacao).toHaveBeenCalledTimes(1);
  });
});
