
function Forms(){

    function cadastrarUsuario(e){
        e.preventDefault()
        console.log("Usuário cadastrado com sucesso! ")
    }

    return(
        <div>
            <h1> Meu Cadastro</h1> 
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Digite seu nome"></input>
                </div>

                <div>
                    <input type="submit" placeholder="Cadastrar"></input>
                </div>
            </form>
        </div>
    )
}

export default Forms