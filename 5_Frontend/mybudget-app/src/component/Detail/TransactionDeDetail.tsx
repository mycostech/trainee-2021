import { useEffect, useState } from "react"
import useTransactionDeApi from "../../hooks/useTransactionDeApi"
import TransactionDe from "../../models/TransactionDe"
interface TransactionDeDetail{
    trande: TransactionDe
    delete_transactionDe: any
}

function TransactionDeDetail({trande, delete_transactionDe}: TransactionDeDetail){

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


        <hr/>
        </>
    )
}
export default TransactionDeDetail