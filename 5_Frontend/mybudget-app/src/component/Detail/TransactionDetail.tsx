import { useEffect, useState } from "react"
import { skipPartiallyEmittedExpressions } from "typescript"
import useTransactionDeApi from "../../hooks/useTransactionDeApi"
import Transaction from "../../models/Transaction"
import TransactionDe from "../../models/TransactionDe"
import TransactionDeDetail from "../Detail/TransactionDeDetail"

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

        <button type="submit">NEW</button>
        <br/>
        </form>

        <form onSubmit={(e) => {
            e.preventDefault()
            //console.log("-->", tranId)
            delTran(tranId)
        }}>

            <button type="submit">DELETE</button>

        </form>

        <div>     
            TransactionId: {tran.transactionId} <br/>
            Date: {tran.date} <br/>
            UserId: {tran.userId}
            <hr/>
        </div>

        <div>
            {transactionDe.map ((td,key) => {
                return <TransactionDeDetail trande={td} key={key} delete_transactionDe={delete_transactionDe}
                put_transactionDe={put_transactionDe} newTranDe={newTranDe} type={type} setNewTranDe={setNewTranDe} DEFAULT_TRANSACTIONDE={DEFAULT_TRANSACTIONDE} tranId={tranId}/> //ส่ง delete_transactionDe ไปให้ จะได้ reuse state แก้ปัญหากดลบแล้วต้องกดรีเฟรช
            })}
        </div>
        </>
    )
}
export default TransactionDetail