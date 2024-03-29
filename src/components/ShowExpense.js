import React from 'react'

const ShowExpense = ({expenseData}) => {
  return (
    <div>
      {expenseData.map(expense=><span>Title:{expense.title}  | Price:{expense.price}</span>)}
    </div>
  )
}

export default ShowExpense
