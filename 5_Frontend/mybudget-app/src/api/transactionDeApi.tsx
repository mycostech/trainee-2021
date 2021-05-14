import axios from "axios"
import TransactionDe from "../models/TransactionDe"
import Type from "../models/Type"

const API_URL = process.env.REACT_APP_API_URL

const transactionDeApi = {

    getTransactionDe: (tranid:number) => {
        return axios.get<TransactionDe[]>(`${API_URL}Transactions/TransactionDetail/${tranid}`)
    },

    postTransactionDe: (newTranDe: TransactionDe) => {
        return axios.post<TransactionDe>(`${API_URL}Transactions/TransactionDetail`, {...newTranDe})
    },

    getType: () => {
        return axios.get<Type[]>(`${API_URL}Transactions/Type`)
    },

    delTransactionDe: (tranid:number, trandeid:number) => {
        return axios.delete<TransactionDe>(`${API_URL}Transactions/${tranid}/${trandeid}`)
    }
}

export default transactionDeApi