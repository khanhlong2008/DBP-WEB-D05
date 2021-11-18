import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

function ExpenseItem(props){
    //const randomPrice = "$"+(Math.random()*10000).toFixed(2);
    // one root node (chi dc return ra 1 the root )
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item_description">
                <h2 className="expense-item_title">{props.title}</h2>
                <div className="expense-item_amount">${props.price}</div>
            </div>
        </Card>
    )
    
}
export default ExpenseItem;