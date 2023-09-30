import { useState } from 'react';


function Forms(){

    function cadastrarUsuario(e){
        e.preventDefault()
        console.log("Usuário cadastrado com sucesso! ")

        console.log(`Usuário ${name} foi cadastrado com a senha ${password}`)
    }

    // Inicia um valor para o nome pela propriedade value
    const [name, setName] = useState('Inicia um valor nome')
    const [password, setPassword] = useState()

    return(
        <div>
            <h1> Meu Cadastro</h1> 
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id="name" name="name" placeholder="Digite seu nome" value = {name}
                        onChange={(e)=> setName(e.target.value)}></input>
                </div>

                <div>
                    <label htmlFor="password">Senha:</label>
                    <input type="password" id="password" name="password" placeholder="Digite sua senha" onChange={(e)=> setPassword(e.target.value)}></input>
                </div>

                <div>
                    <input type="submit" placeholder="Cadastrar"></input>
                </div>
            </form>
        </div>
    )
}

export default Forms