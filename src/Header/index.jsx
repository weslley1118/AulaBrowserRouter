import {Link} from 'react-router-dom'

export default function ninja() {
    return(
    <div className='Redstone'>
        <div className='Netherite1'>
        <h1 className='no'>Oferta</h1>
        </div>
         <div className='Emerald'>
            <div className='Netherite'>
             <h3><Link to='/home'>HOME</Link></h3>
            </div>
            <div className='Netherite'>
             <h3><Link to='/estoque'>ESTOQUE</Link></h3>
            </div>
            <div className='Netherite'>
             <h3><Link to='/oferta'>Oferta</Link></h3>
         </div>
        </div>
    </div>
    )
}