import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "./Expenses.css";

const Expenses=(props)=>{
    const expenseItems=props.data;
    return(
        <Card className="expenses">
        {expenseItems.map((item,index)=>{
            return(
                <ExpenseItem 
                    key={index}
                    date={item.date} 
                    title={item.title} 
                    price={item.price}
                />
            )
        })}
        </Card>
    ) 
};
export default Expenses;