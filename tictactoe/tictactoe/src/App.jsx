import GameBoard from "./GameBoard"
import Header from "./Header"
import Player from "./Player"

const initialBoard=[
  [null,null,null],
  [null,null,null],
  [null,null,null]
]

function App() {
  
  const [gameBoard, setGameBoard]=useState(initialBoard)
  const [activePlayer, setActivePlayer]=useState('X')

  function handleActivePlayer(){
    setActivePlayer((curPlayer)=>curPlayer ==='X'?'O':'X')
  }

    function handleClick(row,col){
        setGameBoard((prevBoard)=>{
            const updatedBoard= [...prevBoard.map((i)=>[...i])]
            updatedBoard[row][col]='X'
            return updatedBoard
        })
    }

  return (
    <>
    <Header/>
    <div id="game-container">
      <ol id="players">
        <Player name='Player 1' symbol={activePlayer}/>
        <Player name='Player 2' symbol={activePlayer}/>
      </ol>
      <GameBoard onSelect={handleClick}/>
    </div>
    </>
    
  )
}

export default App
