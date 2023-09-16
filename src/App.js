import "./App.css";
import HelloWorld from "./components/HelloWorld";

function App() {
  const nome = "Daniel";
  const url = 'https:via.placeholder.com/150'

  function subtracao(num1, num2){
    return num1 - num2
  }

  return (
    <div className="App">
      <h1>JSX</h1>
      <p>Olá {nome}!</p>
      <p>Soma = 2 + 2 = {2 + 2}</p>
      <p>Subtração = 10 - 5 = {subtracao(10, 5)}</p>
      <img src={url} alt="Minha imagem" />

      <HelloWorld/>
    </div>
  );
}

export default App;
