import {Link} from 'react-router-dom'

export default function ninja() {
    return(
    <>
    <h1>Seja bem vindo</h1>
        <h3><Link to='/home'>HOME</Link> </h3>
        <h3><Link to='/estoque'>ESTOQUE</Link></h3>
        <h3><Link to='/oferta'>Oferta</Link></h3>
    </>
    )
}