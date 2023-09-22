import "./App.css";
import HelloWorld from "./components/HelloWorld";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";
import Fruta from "./components/Fruta";
import Frase from "./components/Frase";
import List from "./components/List";
import Evento from "./components/Evento";

function App() {
  const nome = "Daniel"
  const url = 'https:via.placeholder.com/150'

  const name = "Maria"

  const morango = "Morango"
  const maca = "Maçã"
  const melancia = "Melancia"

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

      <SayMyName nome = "Daniel"/>
      <SayMyName nome = {name}/>

      <h2>Descrição Pessoa</h2>
      <Pessoa 
      foto = 'https:via.placeholder.com/150'
      primeiroNome = "Biana"
      idade = "23"
      altura = "1.65"/>

      <h2>Lista de Frutas</h2>
      <Fruta
      banana = 'Banana'
      maracuja = 'Maracujá'
      abacaxi = 'Abacaxi'
      morango = {morango}
      maca = {maca}
      melancia = {melancia}
      />

      <Frase/>

      <List/>

      <h1>Testando Eventos </h1>
      <Evento numero="1"/>
    </div>
  );
}

export default App;
