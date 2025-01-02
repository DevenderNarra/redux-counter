import React from 'react'
import { increment,decrement } from "./counterSlice";
import { useSelector,useDispatch } from "react-redux";


const Counter = () => {
    const count=useSelector((state)=>state.counter.count)
    const dispatch=useDispatch()
  return (
    <div>
      <p>{count}</p>
      <div>
        <button onClick={()=>dispatch(increment())}>+</button>
        <button onClick={()=>dispatch(decrement())}>-</button>
      </div>
    </div>
  )
}

export default Counter
