import { useState } from "react";
import "./ExpenseForm.css";
import Card from "./Card";
const ExpenseForm=(props)=>{
    const[value , setValue]=useState({
        title:"",
        date:"",
        amount:0,
    })
    const[formVisible,setFormVisible]=useState(false);

    const handleSubmit=(event)=>{
        event.preventDefault();
        // console.log("value",value);
       props.onAddExpense(value)
    };
    const handleValueChange=(event)=>{
        // console.log(event.target);
        setValue({
            ...value,
            [event.target.name]:event.target.value,
        })

    };
    
    if(!formVisible){
        return <button onClick={()=>{
            setFormVisible(true);
        }}>New Expense</button>
    }
    /*const [title , setTitle]=useState("");
    const [date,setDate]=useState("");
    const [amount,setAmount]=useState(0);

    const handleSubmit=(event)=>{
        event.preventDefault();

    };
    const handleTitleChange=(event)=>{
        setTitle(event.target.value);
    };
    const handleDateChange=(event)=>{
        setDate(event.target.value);
    };
    const handleAmountChange=(event)=>{
        setAmount(event.target.value);
    };*/ 
    return(
        <Card className="expense-form">
            <form onSubmit={handleSubmit}>
                <div className="expense-form_controls">
                    <div className="expense-form_control">
                        <label>Title</label>
                        <input type="text" 
                        value={value.title}
                        onChange={handleValueChange}
                        name="title"
                        />
                    </div>
                    <div className="expense-form_control">
                        <label>Date</label>
                        <input type="date"
                        value={value.date}
                        onChange={handleValueChange}
                        name="date"
                        />
                    </div>
                    <div className="expense-form_control">
                        <label>Amount</label>
                        <input type="number"
                        value={value.amount}
                        onChange={handleValueChange}
                        name="amount"
                        />
                    </div>
                </div>
                <div className="expense-form_actions">
                    <button type="submit">Add Expense</button>
                    <button  type="button" className="alternate" onClick={()=>{
                        setFormVisible(false);
                    }}>Cancel</button>
                </div>
            </form>
        </Card>
    )
}
export default ExpenseForm;