function Pessoa(props){
    return(
        <div>
            <img src={props.foto} alt={props.primeiroNome}/>
            <h4>Nome: {props.primeiroNome}</h4>
            <h4>Idade: {props.idade}</h4>
            <h4>Altura: {props.altura}</h4>
        </div>
    )
}

export default Pessoa