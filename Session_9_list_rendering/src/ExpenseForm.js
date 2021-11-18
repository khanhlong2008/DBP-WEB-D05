import { useState } from "react";
import "./ExpenseForm.css";
import Card from "./Card";

const ExpenseForm = (props) => {
  const [value, setValue] = useState({
    title: "",
    date: "",
    amount: 0,
  });

  const [formVisible, setFormVisible] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onAddExpense(value);
  };

  const handleValueChange = (event) => {
    setValue({
      ...value,
      [event.target.name]: event.target.value,
    });
  };

  if (!formVisible) {
    return (
      <button
        onClick={() => {
          setFormVisible(true);
        }}
      >
        New Expense
      </button>
    );
  }

  return (
    <Card className="expense-form">
      <form onSubmit={handleSubmit}>
        <div className="expense-form__controls">
          <div className="expense-form__control">
            <label>Title</label>
            <input
              type="text"
              value={value.title}
              onChange={handleValueChange}
              name="title"
            />
          </div>
          <div className="expense-form__control">
            <label>Date</label>
            <input
              type="date"
              value={value.date}
              onChange={handleValueChange}
              name="date"
            />
          </div>
          <div className="expense-form__control">
            <label>Amount</label>
            <input
              type="number"
              value={value.amount}
              onChange={handleValueChange}
              name="amount"
            />
          </div>
        </div>
        <div className="expense-form__actions">
          <button type="submit">Add Expense</button>
          <button
            type="button"
            className="alternate"
            onClick={() => {
              setFormVisible(false);
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </Card>
  );
};

export default ExpenseForm;
