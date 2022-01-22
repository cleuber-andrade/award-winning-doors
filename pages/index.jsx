import { useState } from "react";
import Porta from "../components/Porta";
import { atulizarPortas, criarPortas } from "../function/portas";
import PortaModel from "../model/porta";

export default function Home() {   
  const [ portas, setPortas ] = useState(criarPortas(3, 2))

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
