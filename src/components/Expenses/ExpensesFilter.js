import React, { useState } from "react";
import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  const yearOptions = [];
  for (let year = currentYear; year >= 2019; year--) {
    yearOptions.push(<option key={year} value={year}>{year}</option>);
  }

  console.log(setCurrentYear)

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          {yearOptions}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
