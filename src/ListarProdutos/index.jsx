
export default function ListarProduos({Lista}){
    return(
        <div>
        <div className='Cat'>
            <br/>
        <div className='Dog' >
            {
                Lista.map((estoque)=>
                <div key={estoque.id}>
                <div className='car'>
                    <img className='stick' src={estoque.imagem}/>
                    <p>
                    </p>
                    <div className='warden'>
                    <h4> produtos: {estoque.nome}</h4>
                    <p>valor: {estoque.valor}</p>
                    <p>marca: {estoque.marca}</p>
                    <p>fabricante: {estoque.fabri}</p>
                    <button className="Feather">Adisionar ao carinho</button>
                    </div>
                </div>
                </div>
                )
            }
        </div>
        </div>
        </div>
    )
}