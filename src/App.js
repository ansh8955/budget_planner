import logo from './logo.svg';
import './App.css';
import ShowExpense from './components/ShowExpense';
import Overview from './components/Overview';
import AddExpense from './components/AddExpense';
import { useState } from 'react';

function App() {

  const [totalExpense, setTotalExpense] = useState(0);
  const [expenseData, setExpenseData] = useState([]);
  return (
   <div>
<Overview  totalExpense={totalExpense}/>
<ShowExpense expenseData = {expenseData}/>
<AddExpense setTotalExpense = {setTotalExpense} setExpenseData = {setExpenseData}/>

   </div>
  );
}

export default App;
