import { useSelector } from "react-redux"


const TodoList=()=>{
const todos=useSelector((state)=>state.todos.todos)
const loading=useSelector((state)=>state.todos.loading)
console.log(todos)
    return(
        <div>
            <h3>Todos</h3>
            {loading &&<div>loading</div>}
            {todos.map((item)=>(<div key={todos.id}>{item.id}-{item.title}
            </div>))}
        </div>
    )
}
export default TodoList