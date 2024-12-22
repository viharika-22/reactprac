import { useState } from "react";

export default function Player({ name, symbol }) {
    const [playerName, setPlayerName]=useState(name)
  const [isEdit, setIsEdit] = useState(false);
  function handleEdit() {
    setIsEdit((edit) => !edit);
  }
  function handleChange(e){
    setPlayerName(e.target.value)
  }
  return (
    <>
      <li>
        <span className="player">
          {isEdit ? (
            <input type="text" value={playerName} onChange={handleChange} />
          ) : (
            <span className="player-name">{playerName}</span>
          )}

          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEdit}>{isEdit ? "Save" : "Edit"}</button>
      </li>
    </>
  );
}
