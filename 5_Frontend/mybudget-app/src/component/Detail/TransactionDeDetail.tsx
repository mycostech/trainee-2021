import React, { useEffect, useState } from "react"
import useTransactionDeApi from "../../hooks/useTransactionDeApi"
import TransactionDe from "../../models/TransactionDe"
import Type from "../../models/Type"
import "../../css/budget.css"
import EditForm from "./EditForm"
import { Link, Route, Switch } from "react-router-dom"


interface TransactionDeDetail{
    trande: TransactionDe
    delete_transactionDe: any //รับมาจาก Transaction Detail (state api อยู่ที่นั่น)

    put_transactionDe:any
    type: Type[]
    tranId: number

}



function TransactionDeDetail({trande, delete_transactionDe, put_transactionDe, type, tranId}: TransactionDeDetail){

    const [toggleShow, setToggleShow] = useState(false)

    return(
        <>
        <div className="box" >
            TransactionDeId: {trande.transactionDeId} <br/>
            Amount: {trande.amount} <br/>
            Note: {trande.note} <br/>
            TransactionId: {trande.transactionId} <br/>
            TypeId: {trande.typeId}           

            <br/>
        
        <button className="delete-button" onClick={(e) => {
            e.preventDefault()       
            delete_transactionDe(trande.transactionId, trande.transactionDeId)
            //setDelTranDe(delete_transactionDe)
            //console.log("--h>",trande)

        }}>DELETE</button>

        <button onClick={() => setToggleShow(pre => !pre)} className="edit-btn">EDIT</button>

        {(toggleShow) && 
            <EditForm trande={trande} put_transactionDe={put_transactionDe} type={type} tranId={tranId}/>}

        </div>

        {/* {----------------------------------------------------------------------------} */}


        

        {/* <EditForm trande={trande} put_transactionDe={put_transactionDe} type={type} tranId={tranId}/> */}

        {/* <Switch>
          <Route path={`/edittd/${trande.transactionDeId}`}>
            <EditForm trande={trande} put_transactionDe={put_transactionDe} type={type} tranId={tranId}/>
          </Route>
        </Switch>   */}

        {/* <Link to={`/edittd/${trande.transactionDeId}`} component={EditForm} trande={trande} put_transactionDe={put_transactionDe} type={type} tranId={tranId}><button>GO</button></Link>  */}
        <br/>

        </>
    )
}
export default TransactionDeDetail