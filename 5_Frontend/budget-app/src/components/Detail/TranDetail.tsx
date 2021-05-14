import React, { useState } from 'react'
import Transaction from '../../models/Transaction'


interface TranDetailProps {
    tran: Transaction
}

function TranDetail({tran}: TranDetailProps) {
    
    return (
    <>
    <div style={{flex: 1}}>TransactionId: {tran.transactionId}</div>
    <div style={{flex: 1}}>Date: {tran.date}</div>
    <div style={{flex: 1}}>UserId: {tran.userid}</div>

    <br/>
    </>

    )
}

export default TranDetail