export default function UserInput({userInput,onChange}){
   
    return <section id="user-input">
        <div className="input-group">
            <p>
                <label >Initial Investment</label>
                <input type="number" onChange={(e)=>onChange('initialInvestment',e.target.value)} required value={userInput.initialInvestment}/>
            </p>
            {console.log(userInput.initialInvestmmment)}
            <p>
                <label >Anual Investment</label>
                <input type="number" onChange={(e)=>onChange('annualInvestment',e.target.value)} required value={userInput.annualInvestment}/>
            </p>
        </div>
        <div className="input-group">
            <p>
                <label >Expected Return</label>
                <input type="number" onChange={(e)=>onChange('expectedReturn',e.target.value)} required value={userInput.expectedReturn}/>
            </p>
            <p>
                <label >Duration</label>
                <input type="number" onChange={(e)=>onChange('duration',e.target.value)} required value={userInput.duration}/>
            </p>
        </div>

    </section>
}