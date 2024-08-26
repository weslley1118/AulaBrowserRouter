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
        {id:6,nome:'Raquete de Tenis',valor:'550,00 R$',fabri:'Wilson Clash',marca:'Wilson Clash',imagem:'/public/lista de produtos/5.png'},
        {id:7,nome:'Bola de Tenis',valor:'50,00 R$',fabri:'China',marca:'Sem marca',imagem:'/public/lista de produtos/6.png'},
        {id:8,nome:'Rede de Volei',valor:'229,00 R$',fabri:'China',marca:'Summer',imagem:'/public/lista de produtos/7.png'},
        {id:9,nome:'Bola de Basquete',valor:'190,00 R$',fabri:'Wilson Clash',marca:'Wilson Clash',imagem:'/public/lista de produtos/8.png'},
        {id:10,nome:'Facha de Cabeça',valor:'50,00 R$',fabri:'Naki',marca:'Naki',imagem:'/public/lista de produtos/9.png'},

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