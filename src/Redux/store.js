// import { appActions } from "./action";
// import{icrementCountAction} from "../Redux/counter/action";
import { counterReducer } from "../Redux/counter/reducer";
import {todosReducer} from"../Redux/todos/reducer"
const { legacy_createStore,combineReducers,createStore}=require("redux");

// class Store{
//     #reducer
//     #state
//     #listeners
//     constructor(reducer,initState){
//         this.#reducer=reducer;
//         this.#state=initState;
//         this.#listeners=[];
//     }
//     getState(){
//         return this.#state;
//     }
//     dispatch(action){
//         const oldState=this.#state
//         this.#state=this.#reducer(this.#state,action)
//         console.log(this.#state===oldState)
//         // console.log("dispatch action",action)
//         if(oldState!==this.#state)
//         {
//             this.#listeners.forEach((listener)=>listener())
//         }
//         // const updatedState=this.#reducer(this.#state,action);
//         // this.#state=updatedState;
//         // this.#listeners.forEach(listener=>listener())
//     }
//     subcribe(listener){
//         this.#listeners.push(listener);
//     }
// }
// const initState={count:0}
const rootReducer=combineReducers({
    counter:counterReducer,
    todos:todosReducer
})
const store= legacy_createStore(rootReducer)
// let updatedState=reducer(initState,{type:'INCREMENT'});

// store.subcribe(()=>{
//     console.log("store has got updated",store.getState())
// })
// store.dispatch(icrementCountAction(1))
// store.dispatch(icrementCountAction(2))
console.log("states",store.getState())

export default store