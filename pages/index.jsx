import Porta from "../components/Porta";

export default function Home() {
  return (
    <div >
      <Porta selecionada={true}/>
      <Porta selecionada={false}/>
    </div>
  )
}
