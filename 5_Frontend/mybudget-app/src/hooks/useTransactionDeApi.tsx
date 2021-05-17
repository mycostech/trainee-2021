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
            try{
                const result = await transactionDeApi.postTransactionDe(newTranDe)
                setTransactionDe(td => [...td, result.data])
                // window.alert("SUCCESS");
            }catch(err){
                window.alert(err + "\nPlease input all form.");
            }

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

    const put_transactionDe = useCallback(
        async (tranid:number, trandeid:number, editTranDe: TransactionDe) => {
            try{
                const result = await transactionDeApi.putTransactionDe(tranid, trandeid, editTranDe)
                //setTransactionDe(td => [...td, result.data])
                window.location.reload(true);
            }catch(err){
                window.alert(err + "\nPlease edit all form.");
            }
            
        }, [setTransactionDe]
    )

    return [transactionDe, get_transactionDe, post_transactionDe, type, get_type, delete_transactionDe, put_transactionDe] as const
}


export default useTransactionDeApi