import './NewExpense.css';
import './ExpenseForm.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

function NewExpense(props) {
  const [showExpenseForm, setShowExpenseForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    props.onAddExpense(expenseData);
  };

  const showExpenseFormHandler = (event) => {
    setShowExpenseForm(true);
  };

  const cancelExpenseFormHandler = () => {
    setShowExpenseForm(false);
  };

  return (
    <div className='new-expense'>
      {showExpenseForm ? (
        <ExpenseForm
        callSaveExpenseDataHandler={saveExpenseDataHandler}
          onCancel={cancelExpenseFormHandler}
        />
      ) : (
        <button onClick={showExpenseFormHandler}>Add New Expense</button>
      )}
    </div>
  );
}

export default NewExpense;
