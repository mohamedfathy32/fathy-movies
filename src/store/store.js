import { configureStore } from "@reduxjs/toolkit";
import languageReducer from './slices/language'
import favMovieReducer from "./slices/favMovie";
import counterReducer from "./slices/counter";
import moviesReducer from "./slices/movies";

const store = configureStore({
    reducer: {  
        lang:languageReducer,
        favMovie:favMovieReducer,
        counter:counterReducer,
        movies:moviesReducer
    }, 
})

export default store;