import React from 'react'

const ViewBudget = ({budget,handleEditClick}) => {
    return (
        <div>
            <span>Budget : <i class="fas fa-rupee-sign "></i> {budget}</span>
            <button type='button' class='btn btn-primary ml-3 ' onClick={handleEditClick}>
				Edit
			</button>
        </div>
    )
}

export default ViewBudget
