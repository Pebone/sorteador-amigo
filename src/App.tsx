import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Configuracao from "./paginas/Configuracao";
import Sorteio from "./paginas/Sorteio/Sorteio";

const App = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Configuracao />}></Route>
          <Route path="/sorteio" element={<Sorteio />}></Route>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default App;
