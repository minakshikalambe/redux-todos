import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTodos, getTodos } from "../../Redux/todos/action";



const TodoInput=()=>{
    const[text,setText]=useState("");
    const dispatch=useDispatch()
    const handleAddTodo=()=>{
        addTodos({
           title :text,
           dispatch
        })
        .then(()=>{
            getTodos(dispatch)
        })
    };
    return (
        <div>
            <input value={text} onChange={(e)=>setText(e.target.value)}
            placeholder="add a task"/>
            <button onClick={handleAddTodo}>ADD</button>
        </div>
    )
}
export default TodoInput