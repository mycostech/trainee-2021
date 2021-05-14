import { useCallback, useState } from "react"
import tranApi from "../api/tranAPI"
import Transaction from "../models/Transaction"
import TransactionDetail from "../models/TransactionDetail"

const useTranApi = () => {
    const [trans, setTrans] = useState<Transaction[]>([])
    const [transDe, setTransDe] = useState<TransactionDetail[]>([])

    const uid:number = 31
    const tranid:number = 22
    const tranDeId:number = 30

    const getAllTrans = useCallback(
        async () => {
            //console.log("uid",uid)
            const result = await tranApi.getTrans(uid)
            console.log(result.data)
            setTrans(result.data)
        }, [setTrans]
    )
    
    const getAllTransDe = useCallback(
        async () => {
            const result = await tranApi.getTransDe(tranid)
            console.log(result.data)
            setTransDe(result.data)
        }, [setTransDe]
    ) 

    const insertTranDe = useCallback(
        async (newTranDe: TransactionDetail) => {
            //window.alert("insert tran")
            const updatedTranDe = await tranApi.postTranDe(newTranDe)
            console.log("updatedTranDe : ", updatedTranDe)
            setTransDe(transDe => [...transDe, updatedTranDe.data])
        },
        [setTransDe],
    )

    const deleteTranDe = useCallback(
        async (tranid, tranDeId) => {
            await tranApi.deleteTranDe(tranid, tranDeId)
        }, []
    )

    

    return [trans, transDe, getAllTrans, insertTranDe, deleteTranDe, getAllTransDe] as const
}

export default useTranApi