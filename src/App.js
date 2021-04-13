import "./App.css";
import InicioPage from "./components-page/modal-1/logo";
import AdoparEsbueno1 from "./components-page/modal-2/index";
import AdoparEsbueno2 from "./components-page/modal-3/index";
import PetCategory from "./components-page/modal-4/pet-category";

function App() {
  return (
    <>
      <InicioPage id={"InicioPage"} />
      <AdoparEsbueno1 />
      <AdoparEsbueno2 />
      <PetCategory />
    </>
  );
}

export default App;
