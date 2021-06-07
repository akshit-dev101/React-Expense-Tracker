import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [showExpenseForm, setShowExpenseForm] = useState(0);

  const expenseFormHandler = () => {
    showExpenseForm === 1 ? setShowExpenseForm(0) : setShowExpenseForm(1);
  };

  const titleChangeHandler = (event) => {
    return setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle(" ");
    setEnteredAmount(" ");
    setEnteredDate(" ");
  };

  return (
    <div>
      {showExpenseForm === 0 ? (
        <button onClick={expenseFormHandler}>Add Expense</button>
      ) : (
        <form onSubmit={submitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                type="text"
                onChange={titleChangeHandler}
                value={enteredTitle}
              />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                onChange={amountChangeHandler}
                type="number"
                nin="0.01"
                step="0.01"
                value={enteredAmount}
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                onChange={dateChangeHandler}
                type="date"
                min="2019-01-01"
                max="2023-01-01"
                value={enteredDate}
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button onClick={expenseFormHandler}>Cancle</button>
            <button type="submit">Add Expense</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ExpenseForm;
