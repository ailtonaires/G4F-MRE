import "./App.css";
import BuscaCep from "./pages/BuscaCep/BuscaCep";
import Noticias from "./pages/Noticias/Noticias";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <BuscaCep /> */}
        <Noticias />
      </header>
    </div>
  );
}

export default App;
