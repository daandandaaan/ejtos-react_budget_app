import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, budget, expenses, currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const setBudget = (budget) => {
        if (budget > 20000) {
            alert("The value cannot exceed £20000");
            setBudget("20000");
            return;
        }

        if (budget < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending");
            return;
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: budget
        });

    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}<input
                        required='required'
                        type='number'
                        id='budget'
                        value={budget}
                        step='10'
                        onChange={(event) => setBudget(event.target.value)}>
                        </input>
            </span>
        </div>
    );
};

export default Budget;