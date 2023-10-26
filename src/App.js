import "./App.css";
import OutraLista from "./components/ex7-renderizacao-listas/OutraLista";


function App() {

  const meusItens = ['React', 'Vue', 'Angular']
 
  return (
    <div className="App">
      <h1>Renderização de Listas</h1>

      <OutraLista itens = {meusItens} />
      
      <h3> Lista Vazia</h3>
      <OutraLista itens = {[]} />
    </div>
  );
}

export default App;
