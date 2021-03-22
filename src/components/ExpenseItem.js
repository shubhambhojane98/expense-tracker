import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const ExpenseItem = ({id,name,cost}) => {
    const {dispatch} = useContext(AppContext);

    const handleDeleteExpense =()=>{
        dispatch({
            type:'DELETE_EXPENSE',
            payload : id,
        });
    };
    return (
        <div>
            <li className='list-group-item d-flex justify-content-between align item-center'>
                {name}
                <div>
                    <span className='badge badge-primary badge-pill mr-3'>
                      {cost}  
                    </span>
                    <i class="fas fa-times" onClick={handleDeleteExpense}></i>
                </div>
            </li>
        </div>
    )
}

export default ExpenseItem
