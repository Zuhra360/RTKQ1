import { createSlice } from '@reduxjs/toolkit';

const initialState = 0;

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            return (state += 1);
        },
        incrementfive : (state) => {
            return (state += 5);
        },
        decrement: (state) => {
            return (state -= 1);
        },
        decrementfive : (state) => {
            return (state -= 5);
        },
        reset: (state) => {
            return (state = 0);
        }
    }
});

export const { increment,incrementfive, decrement,decrementfive, reset } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;