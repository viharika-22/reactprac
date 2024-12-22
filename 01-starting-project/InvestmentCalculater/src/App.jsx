import { useState } from "react"
import Header from "./components/Header"
import Results from "./components/Results"
import UserInput from "./components/UserInput"


function App() {

  const [userInput, setUserInput]=useState({
    initialInvestment: 10000,
    annualInvestment:15000,
    expectedReturn: 6,
    duration:10
})

const isValidInput= userInput.duration>0

function handleInput(initialValue,newValue){
    setUserInput((prevInput)=>{
        return{
            ...prevInput,
            [initialValue]:+newValue
        }
    })
   
}

  return (
    <>
    <Header/>
    <UserInput userInput={userInput} onChange={handleInput}/>
    {isValidInput && <Results input={userInput}/>}
    </>
  )
}

export default App
