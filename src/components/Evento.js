
function Evento({ numero }){

    function meuEvento(){
        console.log(`Fui Clicado ${numero}`)

        // Lembrando que não é aspas simples e sim um template string ou template literal (Acento de crase). Essa 
        // funcionalidade permite interpolar variáveis e expressões. E para declarar a variável é necessário iniciar
        // com um cifrão ($) seguido com abre e fecha chaves {}.
    }

    return(
        <div>
           <p> Clique para disparar um evento</p> 
           <button onClick={meuEvento}>Clique aqui</button>
        </div>
    )
}

export default Evento