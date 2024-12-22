import { useState } from "react"



export default function GameBoard({onSelect}){
    

    return <div id="game-board">
        <ol>
            {gameBoard.map((row,rowI)=>(
                <li key={rowI}>
                    <ol>
                        {row.map((col,colI)=><li key={colI}><button onClick={()=>handleClick(rowI,colI)}>{col}</button></li>)}
                    </ol>
                </li>
            ))}
        </ol>
    </div>
}