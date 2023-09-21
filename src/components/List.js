import Item from "./Item"

function List(){
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
            </ul>

            <br />
            
            <h1>Minha Lista de Carros</h1>
            <ul>
                <Item marca="Ferrari"/>
                <Item marca="Porsche"/>
            </ul>
        </>
    )
}

export default List