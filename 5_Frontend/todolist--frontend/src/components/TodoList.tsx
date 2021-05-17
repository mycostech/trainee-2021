import React, { useEffect } from "react";
import todo from "../models/todolist";
import Loading from "./Loading";
import TodoDetial from "./TodoDetail/TodoDetail";

interface TodoListProp {
    getTodo: any;
    loading:boolean
    todo: todo[]
}
function TodoList({
    getTodo,
    loading,
    todo,
}: TodoListProp) {

    useEffect(() => {
        getTodo()
    }, [getTodo])

    return (
        <div>
            {loading ? <Loading /> :
                todo.map(m => {
                    //
                    
                    return <TodoDetial user={m} key={m.id} />
                })
            }
        </div>
    )
}

export default TodoList
