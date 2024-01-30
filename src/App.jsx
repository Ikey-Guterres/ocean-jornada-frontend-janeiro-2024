
import './App.css'
import Card from './components/Card/Card'

function App() {
  const item1 ={
    name:'Rick Sanchez',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
  }
  const item2= {
    name: 'Mother Smith',
    image: ''
  }
  return (
    <>
      <Card item={item1} />
      <Card item={item1} />
    </>
  )
}

export default App
