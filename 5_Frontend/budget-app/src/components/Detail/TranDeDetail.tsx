import React, { useState } from 'react'
import TransactionDetail from '../../models/TransactionDetail'


interface TranDeDetailProps {
    trande: TransactionDetail
}

function TranDeDetail({trande}: TranDeDetailProps) {
    
    return (
    <>
    <div style={{flex: 1}}>TransactionDeId: {trande.transactionDeId}</div>
    <div style={{flex: 1}}>Amount: {trande.amount}</div>
    <div style={{flex: 1}}>Note: {trande.note}</div>
    <div style={{flex: 1}}>TransactionId: {trande.transactionId}</div>
    <div style={{flex: 1}}>Typeid: {trande.typeid}</div>

    <br/>
    </>

    )
}

export default TranDeDetail