import { useCallback, useState } from "react"
import transactionApi from "../api/transactionApi"
import Transaction from "../models/Transaction"

const useTransactionApi = () => {

    const [transaction, setTransaction] = useState<Transaction[]>([])
    
    const get_transaction = useCallback(
        async (userid:number) => {
            const result = await transactionApi.getTransaction(userid)
            setTransaction(result.data)
        }, [setTransaction]
    )

    const post_transaction = useCallback(
        async (newTran:Transaction) => {
            const result = await transactionApi.postTransaction(newTran)
            setTransaction(t => [...t, result.data])
        }, [setTransaction]
    )

    return [transaction, get_transaction, post_transaction] as const
}


export default useTransactionApi