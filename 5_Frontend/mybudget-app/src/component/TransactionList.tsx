import { useEffect, useState } from "react"
import transactionApi from "../api/transactionApi"
import useTransactionApi from "../hooks/useTransactionApi"
import Transaction from "../models/Transaction"
import TransactionDetail from "./Detail/TransactionDetail"
import "../css/budget.css"





function TransactionList() {
    const DEFAULT_TRANSACTION: Transaction = {
        transactionId: 0,
        date: '',
        userId: 31
    }

    const [newTran, setNewTran] = useState<Transaction>(DEFAULT_TRANSACTION)
    
    const [transaction, get_transaction, post_transaction, delete_transaction] = useTransactionApi() //เรียกใช้จาก useTransactionApi
    const userid = 31
    
    useEffect(() => {
        get_transaction(userid)
        //console.log(transaction)
    }, [get_transaction]) //re ใหม่เมื่อมีการเปลี่ยนแปลง

    return(
        <>

        <form className="new-tran" onSubmit={(e) => {
            e.preventDefault()
            post_transaction(newTran)
            setNewTran(DEFAULT_TRANSACTION)           
        }}>

            <div>
                DATE: <input type="date" value={newTran.date} 
                onChange={(e) => {setNewTran(pre => ({...pre, date: (e.target.value)}))}}/>
            </div>
            <button className="new-tran-btn" type="submit">ADD NEW TRANSACTION</button>
            {/* <hr/> */}
        </form>
        

        <div>
            {transaction.map ((t,key) => {
                return <TransactionDetail tran={t} key={key} delTran={delete_transaction}/> //tran={t} key={t.TransactionId} ส่งไปให้ TransactionDetail
            })}
        </div>
       
        </>
    )
}

export default TransactionList