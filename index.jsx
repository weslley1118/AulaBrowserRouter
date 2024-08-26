
export default function ListarProduos({Lista}){
    return(
        <div>
        <div className='00Cat'>
            <br/>
        <div className='00Dog' >
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