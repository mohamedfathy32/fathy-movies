import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../axios/axiosInst";

export const moviesAction = createAsyncThunk("", async ({counter,language}) => {
  const res = await axiosInstance.get("/movie/popular", {
    params: {
      page: counter,
      language:language,
    },
  })
  console.log(res.data.results);
  
  return res.data.results;
});

const moviesSlice = createSlice({
  name: "movies", 
  initialState: { movies: [],loading: true, error: " " },
  extraReducers: (builder) => {
    builder.addCase(moviesAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(moviesAction.fulfilled, (state, action) => {
      state.loading = false;

      state.movies = action.payload;
    });
    builder.addCase(moviesAction.rejected, (state) => {
      state.loading = false;
      state.error = "Failed to fetch movies";
    });
  },
});

export default moviesSlice.reducer;
