import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "favMovie",
  initialState: {movies:[]},
  reducers: {
    setMovie: (state, action) => {
        state.movies.push(action.payload);
    },
    removeMovie: (state, action) => {
        console.log(state)
        state.movies = state.movies.filter((movie) => movie.id!= action.payload.id);
    },
  },
});

export const { setMovie , removeMovie } = movieSlice.actions;
export default movieSlice.reducer;
