import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2021");

  const handleChangeYear = (newYear) => {
    setSelectedYear(newYear);
  };

  const expenseItems = props.data.filter(
    (item) => item.date.getFullYear() === +selectedYear
  );

  return (
    <Card className="expenses">
      <ExpenseFilter
        selectedYear={selectedYear}
        onSelectedYearChange={handleChangeYear}
      />
      <ExpenseChart data={expenseItems} />
      {expenseItems.length > 0 ? (
        expenseItems.map((item) => {
          /* 
          Sử dụng một trường duy nhất trong từng phần tử làm key hơn là dùng index trong mảng
          Index trong mảng có thể bị thay đổi, làm React sẽ update nhầm phần tử có key tương ứng
          */
          return (
            <ExpenseItem
              key={item.id}
              date={item.date}
              price={item.price}
              title={item.title}
            />
          );
        })
      ) : (
        <div className="expenses__no-data">(No data)</div>
      )}
    </Card>
  );
};

export default Expenses;
