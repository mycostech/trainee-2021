import { useEffect, useState } from "react"
import { skipPartiallyEmittedExpressions } from "typescript"
import useTransactionDeApi from "../../hooks/useTransactionDeApi"
import Transaction from "../../models/Transaction"
import TransactionDe from "../../models/TransactionDe"
import TransactionDeDetail from "../Detail/TransactionDeDetail"
import "../../css/budget.css"

// รับค่าที่ส่งมาจาก TransactionList
interface TransactionDetail{
    tran: Transaction
    delTran: any


}

function TransactionDetail({tran, delTran}: TransactionDetail){
    //console.log("==> ",tran)
    const tranId = tran.transactionId   
    //console.log("==>",tranId)

    const [transactionDe, get_transactionDe, post_transactionDe, type, get_type, delete_transactionDe, put_transactionDe] = useTransactionDeApi()

    const DEFAULT_TRANSACTIONDE: TransactionDe = {
        transactionDeId: 0,
        amount: 0,
        note: '',
        transactionId: tranId,
        typeId: 0
    }
    const [newTranDe, setNewTranDe] = useState<TransactionDe>(DEFAULT_TRANSACTIONDE)

    //useEffect ของ TransactionDetail
    useEffect(() => {
        get_transactionDe(tranId)
        get_type()

    }, [get_transactionDe, get_type])

    return (
        <>
        
        <div className="big-box">
        <form onSubmit={(e) => {
            e.preventDefault()
            post_transactionDe(newTranDe)
            setNewTranDe(DEFAULT_TRANSACTIONDE)
            //console.log("val ==> ",newTranDe)
        }}>

        <div>
            AMOUNT: <input type="number" value={newTranDe.amount}
            onChange={(e) => {setNewTranDe(pre => ({...pre, amount:Number (e.target.value)}))}}/>
        </div>

        <div>
            NOTE: <input type="text" value={newTranDe.note}
            onChange={(e) => {setNewTranDe(pre => ({...pre, note:String (e.target.value)}))}}/>
        </div>

        <div>
            <select onChange={(e) => {
                //console.log('select --> ',e.target.value)
                {setNewTranDe(pre => ({...pre, typeId:Number (e.target.value)}))}
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

        <button type="submit" className="new-button">NEW</button>
        <br/>
        <br/>
        </form>

        

        <div>     
            TransactionId: {tran.transactionId} <br/>
            Date: {tran.date} <br/>
            UserId: {tran.userId}
            
        </div>

        <form onSubmit={(e) => {
            e.preventDefault()
            //console.log("-->", tranId)
            delTran(tranId)

            
        }}>

            <button type="submit" className="delete-tran-btn">DELETE TRANSACTION</button>
            <br/>
            <br/>

        </form>

        <div>
            {transactionDe.map ((td,key) => {
                return <TransactionDeDetail trande={td} key={key} delete_transactionDe={delete_transactionDe}
                put_transactionDe={put_transactionDe} type={type} tranId={tranId}/> //ส่ง delete_transactionDe ไปให้ จะได้ reuse state แก้ปัญหากดลบแล้วต้องกดรีเฟรช
            })}
        </div>


        
        </div>
        </>
    )
}
export default TransactionDetail