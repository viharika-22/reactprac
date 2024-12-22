import React, { useState } from "react";

function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);
  const handler = (e)=>{setInput(e.target.value)}
  return (
    <div>
      <center>
        <form>
          <input type="text" name="input" value={input} onChange={handler}></input><br/>
          {/* {input}<br/> */}
          
          <button onClick={(e)=>{
            e.preventDefault()
            setResult(eval(input))}}>Result</button><br/>
         <h4>Result is : {result}</h4> 
         <button onClick={(e)=>{
            e.preventDefault()
            setInput(input+'1')}}>1</button>
            <button onClick={(e)=>{
            e.preventDefault()
            setInput(input+'2')}}>2</button>
            <button onClick={(e)=>{
            e.preventDefault()
            setInput(input+'3')}}>3</button>
            <button onClick={(e)=>{
            e.preventDefault()
            setInput(input+'4')}}>4</button><br/>
            <button onClick={(e)=>{
            e.preventDefault()
            setInput(input+'5')}}>5</button>
            <button onClick={(e)=>{
            e.preventDefault()
            setInput(input+'6')}}>6</button>
            <button onClick={(e)=>{
            e.preventDefault()
            setInput(input+'7')}}>7</button>
            <button onClick={(e)=>{
            e.preventDefault()
            setInput(input+'1')}}>8</button><br/>
            <button onClick={(e)=>{
            e.preventDefault()
            setInput(input+'9')}}>9</button>
            <button onClick={(e)=>{
            e.preventDefault()
            setInput(input+'0')}}>0</button>
            <button onClick={(e)=>{
            e.preventDefault()
            setInput(input+'+')}}>+</button>
            <button onClick={(e)=>{
            e.preventDefault()
            setInput(input+'-')}}>-</button><br/>
            <button onClick={(e)=>{
            e.preventDefault()
            setInput(input+'*')}}>*</button>
            <button onClick={(e)=>{
            e.preventDefault()
            setInput(input+'/')}}>/</button>
            <button onClick={(e)=>{
            e.preventDefault()
            setInput('')}}>cls</button>
            <button onClick={(e)=>{
            e.preventDefault()
            setInput(input+'.')}}>.</button><br/>

        </form>
      </center>
    </div>
  );
}

export default Calculator;
