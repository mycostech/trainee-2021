interface DeleteButtonProps {
    deleteFunc: (id: number) => any
    id: number
}

function DeleteButton({deleteFunc, id}: DeleteButtonProps) {
    

    return (

        <button onClick={() => {
            deleteFunc(id)
        }}>
            DELETE
        </button>        

    )
}

export default DeleteButton