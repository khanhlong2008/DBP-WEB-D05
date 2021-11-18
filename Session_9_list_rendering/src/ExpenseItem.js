import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

function ExpenseItem(props) {
  return (
    // one root node
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2 className="expense-item__title">{props.title}</h2>
        {/* inject JS value to JSX */}
        <div className="expense-item__amount">${props.price}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
