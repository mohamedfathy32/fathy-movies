import { createSlice } from "@reduxjs/toolkit";

const CounterSlice= createSlice({
    name:"language",
    initialState:{counter:1},
    reducers:{
        incrementCounter:(state) => {
            state.counter++
        },
        decrementCounter:(state) => {
            state.counter--
        }
    }
})

export const {incrementCounter , decrementCounter} = CounterSlice.actions;
export default CounterSlice.reducer; 