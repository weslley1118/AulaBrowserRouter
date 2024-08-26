import {useState} from 'react'
import Oferta from '../ListarProdutos'
import Carosel from '../carrossel'
import Bow from '../Header'
import Footer from '../footer/index'
export default function estoque(){
   
    const[estoqueGeral]=useState([

        {id:1,nome:'Bola de Volei',valor:'140,00 R$',fabri:'China',marca:'Rainha',imagem:'/public/lista de produtos/image.png'},
        {id:2,nome:'Bola de Volei',valor:'170,00 R$',fabri:'Penalty',marca:'Penalty',imagem:'/public/lista de produtos/1.png'},
        {id:3,nome:'Bola de Volei',valor:'213,00 R$',fabri:'Japão',marca:'Mikasa',imagem:'/public/lista de produtos/2.png'},
        {id:4,nome:'Chuteira',valor:'299,00 R$',fabri:'Naki',marca:'Naki Beco 2 Society',imagem:'/public/lista de produtos/3.png'},
        {id:5,nome:'Bola de Futebol',valor:'170,00 R$',fabri:' Adidas',marca:'Adidas',imagem:'/public/lista de produtos/4.png'},

    ])
    
    return(
        <div>
            
            <Bow/>
            <Carosel/>
            <Oferta Lista={estoqueGeral}/>
            <Footer/>
        </div>
    )
}