import { useEffect, useState } from "react"
import TransactionDe from "../../models/TransactionDe"
import Type from "../../models/Type"


interface EditForm{
    trande: TransactionDe

    put_transactionDe:any
    type: Type[]
    tranId: number
}

function EditForm({trande, put_transactionDe, type, tranId}: EditForm) {

    const DEFAULT_editTRANSACTIONDE: TransactionDe = {
        transactionDeId: trande.transactionDeId,
        amount: trande.amount,
        note: trande.note,
        transactionId: tranId,
        typeId: trande.typeId
    }

    const [editTranDe, setEditTranDe] = useState<TransactionDe>(DEFAULT_editTRANSACTIONDE)
    const [_amount, setAmount] = useState<number>(0)
    const [_note, setNote] = useState<string>('')
    const [_typeId, setTypeId] = useState<number>(0)

    return (
        <>
        {/* <h1>EDIT PAGE</h1> */}

        <form className="edit-form" onSubmit={(e) => {
            e.preventDefault()

            const newObj:TransactionDe = {
                transactionDeId : trande.transactionDeId,
                amount: _amount,
                note: _note,
                transactionId: trande.transactionId,
                typeId: _typeId
            }

            //console.log("====>",newObj)
            
            put_transactionDe(tranId, trande.transactionDeId, newObj)
            // console.log("====>",put_transactionDe(tranId, trande.transactionDeId, newObj))
            // window.location.reload(true);
        }}>

        <div>
            AMOUNT: <input type="number" placeholder={String(editTranDe.amount)}
            onChange={(e) => {setAmount(Number(e.target.value))}}/>
        </div>

        <div>
            NOTE: <input type="text" placeholder={String(editTranDe.note)}
            onChange={(e) => {setNote(String(e.target.value))}}/>
        </div>

        <div>
            <select onChange={(e) => {
                //console.log('select --> ',e.target.value)
                {setTypeId(Number(e.target.value))}
            }}>
                <option>---</option>
                {type.map(t => {
                    //console.log("---> ",t.typeId)
                    return (
                    <>
                    <option value={t.typeId}>{t.typeName}</option>
                    </>)})}               
            </select>
        </div>

        <button type="submit" className="new-button">SAVE</button>
        <br/>
        </form>


        <br/>
        </>
    )
}

export default EditForm