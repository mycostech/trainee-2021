import { useState } from "react"
import TransactionDetail from "../models/TransactionDetail"

interface TranDeFormProps {
    insertTranDe: any
}

const DEFAULT_TRANDE: TransactionDetail = {
    //transactionDeId: '',
    amount: 0,
    note: '',
    transactionId: 22,
    typeid: 0
}

function TranDeForm({insertTranDe}: TranDeFormProps) {
    const [newTranDe, setNewTranDe] = useState<TransactionDetail>(DEFAULT_TRANDE)

    return (
        <>
       
        <form onSubmit={(e) => {
            e.preventDefault()
            //window.alert("submit")
            insertTranDe(newTranDe)
            setNewTranDe(DEFAULT_TRANDE)
        }}>

            <div>
                Amount: <input type="number" value={newTranDe.amount} onChange={(e) => {
                    setNewTranDe(pre => ({...pre, amount: Number(e.target.value)}))}} />
            </div>
            <div>
                Note: <input type="text" value={newTranDe.note} onChange={(e) => {
                    setNewTranDe(pre => ({...pre, note: e.target.value}))}} />
            </div>
            <div>
                TypeId: <input type="number" value={newTranDe.typeid} onChange={(e) => {
                    setNewTranDe(pre => ({...pre, typeid: Number(e.target.value)}))}} />
            </div>


            <div>
                <button type="submit">
                    Add
                </button>
            </div>
            
        </form>
        </>

        
    )
}

export default TranDeForm