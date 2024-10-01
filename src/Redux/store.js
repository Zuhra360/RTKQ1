import { configureStore } from '@reduxjs/toolkit';
import { todoReducer } from './Slice/TodoSlice';
import { counterReducer } from './Slice/CounterSlice';

export const store = configureStore({
    reducer: {
        todo: todoReducer,
        counter: counterReducer
    }
});