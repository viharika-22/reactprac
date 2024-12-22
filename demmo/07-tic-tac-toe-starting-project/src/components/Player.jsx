import { useState } from "react";

export default function Player({ name, symbol , isActive}) {
  const [isEditing, setIsEditing] = useState(false);
const[playerName, setPlayerName] = useState(name)

  function handleEdit() {
    setIsEditing((a) => !a);
  }

function handlePlayerName(e){
    setPlayerName(e.target.value)
}

  return (
    <li className={isActive ? 'active': undefined}>
      <span className="player">
        {isEditing ? <input type="text" value={playerName} onChange={handlePlayerName}/> : <span className="player-name">{playerName}</span>}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{isEditing ? 'Save': 'Edit'}</button>
    </li>
  );
}
