import { render, screen } from "@testing-library/react";
import React from "react";
import Cabecalho from "./Cabecalho";

test("Cabecalho deve ter imagem de logo e de participante", () => {
  render(<Cabecalho />);
  const divLogo = screen.getByRole('separator')

  const imgCabecalho = screen.getByAltText("Participante");

  expect(divLogo).toBeInTheDocument();

  expect(imgCabecalho).toBeInTheDocument();
});
