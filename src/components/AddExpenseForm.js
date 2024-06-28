// AddExpenseForm.js//

import React, { useState, useEffect } from 'react';
import './AddExpenseForm.css';

function AddExpenseForm({ addExpense, editExpense, editIndex, expenseToEdit }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    if (expenseToEdit) {
      setDescription(expenseToEdit.description);
      setAmount(expenseToEdit.amount);
      setCategory(expenseToEdit.category);
    }
  }, [expenseToEdit]);

  useEffect(() => {
    setIsFormValid(description.trim() !== '' && amount > 0);
  }, [description, amount]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const expense = {
      description,
      amount: parseFloat(amount),
      category,
      date: new Date().toLocaleString(),
    };

    if (editIndex !== null) {
      editExpense(expense, editIndex);
    } else {
      addExpense(expense);
    }

    setDescription('');
    setAmount('');
    setCategory('Food');
  };

  return (
    <form className="add-expense-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Food">Food</option>
        <option value="Stationary">Stationary</option>
        <option value="Other">Other</option>
      </select>
      <button type="submit" disabled={!isFormValid}>
        {editIndex !== null ? 'Update Expense' : 'Add Expense'}
      </button>
    </form>
  );
}

export default AddExpenseForm;
