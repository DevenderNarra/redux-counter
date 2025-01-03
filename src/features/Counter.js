import React, { useState } from 'react'
import { increment,decrement, incrementByAmount, reset } from "./counterSlice";
import { useSelector,useDispatch } from "react-redux";


const Counter = () => {
    const count=useSelector((state)=>state.counter.count)
    const [incrementAmount,setIncrementAmount]=useState(0)
    const dispatch=useDispatch()
    const addAmount= Number(incrementAmount) || 0
  return (
    <div>
      <p>{count}</p>
      <div>
        <button onClick={()=>dispatch(increment())}>+</button>
        <button onClick={()=>dispatch(decrement())}>-</button>
      </div>
      <input type="text" placeholder='Enter amount' value={addAmount} onChange={(e)=>setIncrementAmount(e.target.value)}/>
      <div>
        <button onClick={()=>dispatch(incrementByAmount(addAmount))}>Add Amount</button>
        <button onClick={()=>dispatch(reset())}>Reset</button>
      </div>
    </div>
  )
}

export default Counter
