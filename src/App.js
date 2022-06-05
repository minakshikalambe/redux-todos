import {icrementCountAction} from "./Redux/counter/action"
import { useContext } from 'react';
import './App.css';
import { ReduxContext } from './Redux/ReduxProvider';
import { useDispatch, useSelector } from "react-redux";

import Todo from "./Components/Todo/Todo";

function App() {
 const count=useSelector((state)=>{
   console.log(state)
   return state.counter.count})
 const dispatch=useDispatch()
  return (
    <div className="App">
      <h1>hello</h1>
    <h1>Count:{count}</h1>
    <button onClick={()=>{dispatch(icrementCountAction(1))}}>ADD</button>
    <button onClick={()=>{dispatch(icrementCountAction(-1))}}>REDUCE</button>
    <br/>
    <br/>
    <br/>
    <Todo/>
    </div>
  );
}

export default App;
