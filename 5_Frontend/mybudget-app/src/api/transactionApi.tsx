import axios from "axios"
import Transaction from "../models/Transaction"

const API_URL = process.env.REACT_APP_API_URL

const transactionApi = {
    getTransaction: (userid:number) => {
        //console.log(`==> ${API_URL}Transactions/${userid}`)
        return axios.get<Transaction[]>(`${API_URL}Transactions/${userid}`)
    },

    postTransaction: (newTran: Transaction) => {
        return axios.post<Transaction>(`${API_URL}Transactions`, {...newTran})
    },

    deleteTransaction: (tranid:number) => {
        return axios.delete<Transaction>(`${API_URL}Transactions/${tranid}`)
    }

}

export default transactionApi