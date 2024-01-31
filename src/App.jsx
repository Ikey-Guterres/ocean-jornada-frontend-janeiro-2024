
import './App.css'
import Card from './components/Card/Card'

function App() {
  //Carregamento de dados direto via código
  const item1 = {
    name: 'Rick Sanchez',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
  }
  const item2 = {
    name: 'Morty Smith',
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
  }
  const item3 = {
    name: 'Summer Smith',
    image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg'
  }
  const item4 = {
    name: 'Beth Smith',
    image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg'
  }
  const itens = [item1, item2, item3, item4]

  async function carregarDadosAPI() {
    // Carregamento de dados via API, usando npm fetch
    const apiURL = 'https://rickandmortyapi.com/api/character/'

    const response = await fetch(apiURL)
    
    //console.log(response)

    const body = await response.json()

    console.log(body)

    //Extrair a propriedade results do body
    //Essa propriedade contém a lista de itens
    const results = body.results;

    /*TODO: Enviar os 'results' para o JSX, exibindo
    um card para cada item da API e depois subir o
    site na nuvem */
  }

  carregarDadosAPI()
  return (
    <>
      <div className="cards">
        {
          itens.map((item, i) => <Card item={item} key={i} />)
        }
      </div>
    </>
  )
}

export default App
