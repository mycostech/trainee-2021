import React, { useEffect } from "react"
import Transaction from "../models/Transaction"
import TranDetail from "./Detail/TranDetail"

interface TransListProps {
    getTrans: any
    trans: Transaction[]
}

function TranList({getTrans, trans}: TransListProps) { 

    useEffect(() => {
        getTrans()
    }, [getTrans])

    //console.log(trans)

    return (
        <div>         
            {trans.map((m, key )=> {return <TranDetail tran={m} key={key} />})}
        </div>
    )

}

export default TranList