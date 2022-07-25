import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import quotes from './json/quotes.json'
import colors from './utilities/colors'

function App() {

  const getRandom=arr =>{
    const idxRandom= Math.floor(Math.random()* arr.length)
    return arr[idxRandom]
  }
  let quoteRandom = getRandom(quotes)
  let colorRandom = getRandom(colors)

  const [quoteBox, setquoteBox] = useState(quoteRandom)
  const [color, setcolor] = useState(colorRandom)

  const objBg={
    background:colorRandom
  }

  const getRandomAll= ()=>{
    quoteRandom=getRandom(quotes)
    colorRandom=getRandom(colors)
    setcolor(quoteRandom)
    setquoteBox(colorRandom)
  }

return (
    <div className="App" style={objBg}>
     <QuoteBox 
     quoteRandom={quoteRandom}
     colorRandom={colorRandom}
     getAll={getRandomAll}/>
    </div>
  )
}

export default App
