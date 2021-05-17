interface DeleteButtonProps {
    deleteFunc: (id: number) => any
    id: number
}

function DeleteButton({deleteFunc, id}: DeleteButtonProps) {
    

    return (

        <button onClick={() => {
            alert('Delete Completed.')
            deleteFunc(id)
        }}>
            DELETE
        </button>        

    )
}

export default DeleteButton