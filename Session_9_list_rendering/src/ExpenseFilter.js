import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const onChange = (event) => {
    props.onSelectedYearChange(event.target.value);
  };

  return (
    <div className="expense-filter">
      <label>Filter by year:</label>
      <select value={props.selectedYear} onChange={onChange}>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
