import React,{useState} from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const dummyExpense=[
  {
    id: 'e1',
    title: 'DSLR',
    amount: 50000,
    date: new Date(2026, 9, 16),
  },

  { id: 'e2',
    title: 'Go-Pro',
    amount: 30000, 
    date: new Date(2026, 9, 16) 
  },

  {
    id: 'e3',
    title: 'DJI mini drone',
    amount: 100000,
    date: new Date(2026, 9, 16),
  },

  {
    id: 'e4',
    title: 'Tripod & Lens',
    amount: 70000,
    date: new Date(2026, 9, 16),
  },

  {
    id: 'e5',
    title: 'Macbook',
    amount: 200000,
    date: new Date(2026, 9, 16),
  },
]
const App=()=> {
  const [expenses,setExpenses]=useState(dummyExpense);

  const addExpenseHandler= expense=>{
    setExpenses(prevExpenses=>{
      return ([expense,...prevExpenses])
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
