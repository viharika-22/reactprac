import { useState } from "react"



export default function GameBoard({onSelect, board}){


 return <ol id="game-board">
    {board.map((row,rowI)=>(
        <li key={rowI}>
            <ol>
            {row.map((col,colI)=>(
                <li key={colI}><button onClick={()=>onSelect(rowI,colI)}
                disabled={col!==null} >{col}</button></li>
            ))}
            </ol>
        </li>
    ))}
 </ol>
}