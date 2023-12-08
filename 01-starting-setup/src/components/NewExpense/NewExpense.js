import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isEditing,setIsEditing]=useState(false);

  const saveExpenseDataHandler = (expenseData) => {
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };
  const startEditingHandler =()=>{
    setIsEditing(true);
  }
  const stopEdititingHandler =()=>{
    setIsEditing(false)
  }

  return (
    <div className='new-expense'>
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing &&(
        <ExpenseForm 
        onSaveExpenseData={saveExpenseDataHandler} 
        onCancel={stopEdititingHandler}
        />
      )}
      
    </div>
  );
};

export default NewExpense;