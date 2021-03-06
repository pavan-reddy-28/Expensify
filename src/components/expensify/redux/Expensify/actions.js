import {v4 as uuid} from 'uuid';
import {ADD_EXPENSE, REMOVE_EXPENSE, EDIT_EXPENSE} from './types'

// ADD EXPENSE
const addExpense =(
        {
            description ='',
            note='',
            amount=0,
            createdAt=0,
        }={}
    ) =>({
        type:ADD_EXPENSE,
        expenses : {
            id:uuid(),
            description,
            note,
            amount,
            createdAt,
        },

})


    // REMOVE EXPENSEE
const removeExpense = ({id}={})=>({
    type:REMOVE_EXPENSE,
    id
})

    // EDIT EXPENSE
const editExpense = (id,updates)=> ({
    type:EDIT_EXPENSE,
    id,
    updates
})

export {addExpense,removeExpense,editExpense}


    