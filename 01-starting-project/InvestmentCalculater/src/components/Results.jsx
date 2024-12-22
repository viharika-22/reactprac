import {calculateInvestmentResults,formatter} from '../util/investment.js'
export default function Results({input}){
    const result =calculateInvestmentResults(input)
    const initialInvestment= result[0].valueEndOfYear-result[0].interest-result[0].annualInvestment;
    console.log(result)
    return <table id="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
            </tr>
        </thead>
        <tbody>
            {result.map((yearData)=>{
                const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment *yearData.interest
                const totalAmountInvested = yearData.valueEndOfYear-totalInterest
                return(
                    <tr key={yearData.year}>
                         <td>{formatter.format(yearData.valueEndOfYear)}</td>
                         <td>{formatter.format(yearData.interest)}</td>
                         <td>{formatter.format(totalInterest)}</td>
                         <td>{formatter.format(totalAmountInvested)}</td>
                    </tr>
                )
            })}
        </tbody>
    </table>
}