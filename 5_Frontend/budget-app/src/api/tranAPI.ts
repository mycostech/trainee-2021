import axios from 'axios'
import Transaction from '../models/Transaction'
import TransactionDetail from '../models/TransactionDetail'

const API_URL = process.env.REACT_APP_API_URL as string

const tranApi = {

    getTrans: (uid:number) => {       
        //console.log("===>"+API_URL + `api​/Transactions​/${uid}`)  
        return axios.get<Transaction[]>(`${API_URL}Transactions/${uid}`)  
    },

    getTransDe: (tranid:number) => {       
        return axios.get<TransactionDetail[]>(`${API_URL}Transactions/TransactionDetail/${tranid}`)  
    },

    postTranDe: (trande: TransactionDetail) => {
        //window.alert(trande) 
        return axios.post<TransactionDetail>(API_URL + 'Transactions/TransactionDetail', {...trande})
    },

    deleteTranDe: (tranid:number, tranDeId:number) => {
        return axios.delete<TransactionDetail>(`${API_URL}Transactions/TransactionDetail/${tranid}/${tranDeId}`)
    }
  
}

export default tranApi

