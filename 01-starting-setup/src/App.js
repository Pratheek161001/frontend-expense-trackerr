import React from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
const App=()=> {
  const expenses=[
    {
      id: 'e1',
      title: 'DSLR',
      cost: 50000,
      date: new Date(2026, 9, 16),
    },

    { id: 'e2',
      title: 'Go-Pro',
      cost: 30000, 
      date: new Date(2026, 9, 16) 
    },

    {
      id: 'e3',
      title: 'DJI mini drone',
      cost: 100000,
      date: new Date(2026, 9, 16),
    },

    {
      id: 'e4',
      title: 'Tripod & Lens',
      cost: 70000,
      date: new Date(2026, 9, 16),
    },

    {
      id: 'e5',
      title: 'Macbook',
      cost: 200000,
      date: new Date(2026, 9, 16),
    },
  ]

  const addExpenseHandler= expense=>{
    console.log('in App.js')
    console.log(expense)
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
