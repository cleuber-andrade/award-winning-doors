import Porta from "../components/Porta";
import { useState } from "react";
import { criarPortas, atulizarPortas } from "../function/portas";


export default function Jogo(){
  const [ portas, setPortas ] = useState(criarPortas(5, 2));

  const renderizarPortas = () => {
    return portas.map(porta =>{
      return <Porta key={porta.numero} value={porta} onChange={novaPorta => setPortas(atulizarPortas(portas, novaPorta))}/>
    })
  }
  
  return (
    <div style={{display: "flex"}}>
      {renderizarPortas()}           
    </div>
  )
}