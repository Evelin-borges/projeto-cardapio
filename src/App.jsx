import { useState } from "react";
import hashtaurante from "./assets/hashtaurante.webp";
import './App.css';
import { Navegacao } from "./navegacao";
import { ItemCardapio } from "./ItemCardapio";
import { pratosPrincipais, sobremesas, bebidas } from "./cardapio";


export function App() {

  const paginasMenu = [pratosPrincipais, sobremesas, bebidas];
  const [paginaSeleciona, atualizarPaginaSelecionada] = useState (0);

  return <>
          <img src={hashtaurante} alt="" className="capa" />
           <Navegacao atualizarPaginaSelecionada={atualizarPaginaSelecionada}/>
           <div className="menu">
            {paginasMenu[paginaSeleciona].map(item => <ItemCardapio nome={item.nome} descricao={item.descricao} preco={item.preco} imagem={item.imagem}/>)}
           </div>
          </>
}