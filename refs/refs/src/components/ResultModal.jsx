export default function ResultModal({ref,result,targetTime}){
    return <dialog ref={ref}className="result-modal" open>
        <h2>You {result}</h2>
        <form method="dailog">
            <button>Close</button>
        </form>
    </dialog>
}