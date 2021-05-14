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
    get,
    loading,
    todo,
}: TodoListProp) {

    useEffect(() => {
        getDate()
    }, [gettodo])

    return (
        <div>
            {loading ? <Loading /> :
                todo.map(m => {
                    return <TodoDetial note={m} key={m.id} />
                })
            }
        </div>
    )
}

export default TodoList