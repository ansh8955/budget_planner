import React, { useRef } from 'react'

const AddExpense = ({setExpenseData}) => {

    const titleRef = useRef();
    const priceRef = useRef();

  return (
    <div>
     <label name="name"/>

     <input ref ={titleRef} placeholder='Enter Title ' id="name" type ="text"/>
     <input ref = {priceRef} placeholder='Enter Amount ' id="name" type ="number"/>
     <button
     
     onClick={()=>{
       const title = titleRef.current.value;
       const price = priceRef.current.value;
       setExpenseData(prevData=>[...prevData,{title,price}])

     }}
     
     >Add</button>
     <hr/>
    </div>
  )
}

export default AddExpense
