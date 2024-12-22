export default function Log({turns}){
    return <ol id="log">
        {turns.map(turn=> <li>{turn.player} selcted {turn.square.row},{turn.square.col} </li>)}
    </ol>
}