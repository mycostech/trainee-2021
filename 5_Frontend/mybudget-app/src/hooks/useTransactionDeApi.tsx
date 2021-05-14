import { useCallback, useState } from "react"
import transactionDeApi from "../api/transactionDeApi"
import TransactionDe from "../models/TransactionDe"
import Type from "../models/Type"

const useTransactionDeApi = () => {

    const [transactionDe, setTransactionDe] = useState<TransactionDe[]>([])
    const [type, setType] = useState<Type[]>([])

    const get_transactionDe = useCallback(
        async (tranid:number) => {
            const result = await transactionDeApi.getTransactionDe(tranid)
            setTransactionDe(result.data)
        }, [setTransactionDe]
    )

    const post_transactionDe = useCallback(
        async (newTranDe:TransactionDe) => {
            const result = await transactionDeApi.postTransactionDe(newTranDe)
            setTransactionDe(td => [...td, result.data])
        }, [setTransactionDe]
    )

    const get_type = useCallback(
        async () => {
            const result = await transactionDeApi.getType()
            setType(result.data)
        }, [setType]
    )

    const delete_transactionDe = useCallback(
        async (tranid:number, trandeid:number) => {
            const result = await transactionDeApi.delTransactionDe(tranid, trandeid)
            //console.log(result)
            setTransactionDe(td => td.filter(d => {
               return d.transactionDeId !== result.data.transactionDeId
            }))
        }, [setTransactionDe]
    )

    return [transactionDe, get_transactionDe, post_transactionDe, type, get_type, delete_transactionDe] as const
}


export default useTransactionDeApi