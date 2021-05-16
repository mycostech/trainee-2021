import { useEffect, useState } from "react"
import useTransactionDeApi from "../../hooks/useTransactionDeApi"
import TransactionDe from "../../models/TransactionDe"
import Type from "../../models/Type"
interface TransactionDeDetail{
    trande: TransactionDe
    delete_transactionDe: any //รับมาจาก Transaction Detail (state api อยู่ที่นั่น)

    put_transactionDe:any
    newTranDe: any
    type: Type[]
    setNewTranDe: any
    DEFAULT_TRANSACTIONDE: TransactionDe
    tranId: number
}

function TransactionDeDetail({trande, delete_transactionDe, put_transactionDe, newTranDe, type, setNewTranDe, DEFAULT_TRANSACTIONDE, tranId}: TransactionDeDetail){

    //const [editTranDe, setEditTranDe] = useState<TransactionDe>(DEFAULT_TRANSACTIONDE)

    const DEFAULT_editTRANSACTIONDE: TransactionDe = {
        transactionDeId: trande.transactionDeId,
        amount: DEFAULT_TRANSACTIONDE.amount,
        note: DEFAULT_TRANSACTIONDE.note,
        transactionId: tranId,
        typeId: DEFAULT_TRANSACTIONDE.typeId
    }

    return(
        <>
        <div style={{color: "blue"}}>
            TransactionDeId: {trande.transactionDeId} <br/>
            Amount: {trande.amount} <br/>
            Note: {trande.note} <br/>
            TransactionId: {trande.transactionId} <br/>
            TypeId: {trande.typeId}           
        </div>

        
        <button onClick={(e) => {
            e.preventDefault()       
            delete_transactionDe(trande.transactionId, trande.transactionDeId)
            //setDelTranDe(delete_transactionDe)
            //console.log("--h>",trande)

        }}>DELETE</button>

        {/* {----------------------------------------------------------------------------} */}

        <form onSubmit={(e) => {
            e.preventDefault()
            put_transactionDe(tranId, trande.transactionDeId, newTranDe)
            console.log("===>", tranId)
            console.log("=====>", trande.transactionDeId)
            setNewTranDe(DEFAULT_editTRANSACTIONDE)
            console.log("val ==> ",DEFAULT_editTRANSACTIONDE)
        } } style={{color: "red"}}>

        <div>
            AMOUNT: <input type="number" value={newTranDe.amount}
            onChange={(e) => {setNewTranDe(({amount:Number (e.target.value)}))}}/>
        </div>

        <div>
            NOTE: <input type="text" value={newTranDe.note}
            onChange={(e) => {setNewTranDe(({note:String (e.target.value)}))}}/>
        </div>

        <div>
            <select onChange={(e) => {
                //console.log('select --> ',e.target.value)
                {setNewTranDe(({typeId:Number (e.target.value)}))}
            }}>
                <option>---</option>
                {type.map(t => {
                    //console.log("---> ",t.typeId)
                    return (
                    <>
                    <option value={t.typeId}>{t.typeName}</option>
                    </>)})}               
            </select>
        </div>

        <button type="submit">EDIT</button>
        <br/>
        </form>



    
        <hr/>
        </>
    )
}
export default TransactionDeDetail