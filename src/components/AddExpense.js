import React from 'react'

const AddExpense = () => {
  return (
    <div>
     <label name="name"/>

     <input placeholder='Enter Title ' id="name" type ="text"/>
     <input placeholder='Enter Amount ' id="name" type ="number"/>
     <button>Add</button>
    </div>
  )
}

export default AddExpense
