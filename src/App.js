import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from "./pages/Home";
import Empresa from "./pages/Empresa";
import Contato from "./pages/Contato";
import Navbar from "./components/ex9-router/Navbar";
import Rodape from "./components/ex10-icons/Rodape";


function App() {

  return (
    <div className="App">
      <h1>Router</h1>
      <Router>
        <Navbar />
        
        <Routes>
            <Route exact path="/" element = {<Home />} />  
            <Route path="/empresa" element = {<Empresa />}/>
            <Route path="/contato" element= {<Contato />} />  
        </Routes>
        <Rodape />
      </Router>
    </div>
  );
}

export default App;

/* 
No caso deveria ser criado uma pasta chamada layout ao invés de "ex9-router" e dentro da pasta "layout" teria as sub-pastas dos componentes 
"Navbar" e "Footer"
*/