import logo from './logo.svg';
import './App.css';
import ShowExpense from './components/ShowExpense';
import Overview from './components/Overview';
import AddExpense from './components/AddExpense';
import { useState } from 'react';

function App() {

  const [totalExpense, setTotalExpense] = useState(0);
  const [expenseData, setexpenseData] = useState([]);
  return (
   <div>
<Overview  totalExpense={totalExpense}/>
<ShowExpense expenseData = {expenseData}/>
<AddExpense setexpenseData = {setexpenseData}/>

   </div>
  );
}

export default App;
