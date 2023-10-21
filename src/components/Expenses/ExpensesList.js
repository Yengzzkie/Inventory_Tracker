import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

function ExpensesList(props) {
  return (
    <div>
      {/* conditionally renders items based on year */}
      {props.onFilteredExpenses.length === 0 ? (<h3 className="fallback-description">No expenses found</h3>) : 
      (props.onFilteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )}
    </div>
  );
}

export default ExpensesList;
