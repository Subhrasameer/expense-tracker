// ExpenseItem.js //

import React from 'react';
import './ExpenseItem.css';

function ExpenseItem({ expense, deleteExpense, editExpense, index }) {
  return (
    <div className="expense-item">
      <div className="expense-description">{expense.description}</div>
      <div className="expense-amount">{expense.amount}</div>
      <div className="expense-category">{expense.category}</div>
      <div className="expense-date">{expense.date}</div>
      <button className="edit-button" onClick={() => editExpense(index)}>Edit</button>
      <button className="delete-button" onClick={() => deleteExpense(index)}>Delete</button>
    </div>
  );
}

export default ExpenseItem;
