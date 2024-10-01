import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
   name : 'todo',
   initialState : [],
   reducers: {
    addtodo : (state,action) => {
        state.push({ id: Date.now() , todo : action.payload});
    },
    deletetodo : (state, action) => {
        return state.filter((todo) => todo.id !== action.payload);
    },
    edittodo : (state, action) => {
      const { id, newTodo } = action.payload;
      const todoToEdit = state.find((todo) => todo.id === id);
      if (todoToEdit) {
        todoToEdit.todo = newTodo; 
      }
       
   }
}
});
export const {addtodo, deletetodo, edittodo} = todoSlice.actions;
export const todoReducer = todoSlice.reducer;

