//ExpenseList.js //

import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

function ExpenseList({ expenses, deleteExpense, editExpense }) {
  const totalExpense = expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <div className="expense-list">
      {expenses.map((expense, index) => (
        <ExpenseItem 
          key={index} 
          expense={expense} 
          deleteExpense={deleteExpense} 
          editExpense={editExpense} 
          index={index} 
        />
      ))}
      <div className="total-expense">Total: {totalExpense}</div>
    </div>
  );
}

export default ExpenseList;
