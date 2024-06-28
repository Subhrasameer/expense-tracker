//Track.js//

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import AddExpenseForm from '../components/AddExpenseForm';
import ExpenseList from '../components/ExpenseList';
import './Track.css';

function Track() {
  const [expenses, setExpenses] = useState(() => {
    const storedExpenses = localStorage.getItem('expenses');
    return storedExpenses ? JSON.parse(storedExpenses) : [];
  });

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const editExpense = (updatedExpense, index) => {
    const newExpenses = [...expenses];
    newExpenses[index] = updatedExpense;
    setExpenses(newExpenses);
  };

  const deleteExpense = (index) => {
    const newExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(newExpenses);
  };

  return (
    <div>
      <Navbar />
      <AddExpenseForm addExpense={addExpense} />
      <ExpenseList 
        expenses={expenses} 
        editExpense={editExpense} 
        deleteExpense={deleteExpense} 
      />
    </div>
  );
}

export default Track;
