import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Movies from "./pages/Movies/Movies";
import MovieInfo from "./pages/MovieInfo/MovieInfo";
import MoviesTopRated from "./pages/MoviesTopRated/MoviesTopRated";
import MoviesNowPlaying from "./pages/MoviesNowPlaying/MoviesNowPlaying";
import MoviesUpComing from "./pages/MoviesUpComing/MoviesUpComing";
import FavoriteMovies from "./pages/favoriteMovies/favoriteMovies";
import AppLayout from "./component/AppLayout/AppLayout";
import { Provider } from "react-redux";
import store from "./store/store";
import MovieSearch from "./pages/MovieSearch/MovieSearch";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "movies", element: <Movies /> },
      { path: "favoriteMovies", element: <FavoriteMovies /> },
      { path: "top_rated", element: <MoviesTopRated /> },
      { path: "now_playing", element: <MoviesNowPlaying /> },
      { path: "upcoming", element: <MoviesUpComing /> },
      { path: "movie/:id", element: <MovieInfo /> },
      { path: "mov/:search", element: <MovieSearch /> },

      { path: "/*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return (
    <>
      <Provider store={store}>
          <RouterProvider router={routes} />
      </Provider>
    </>
  );
}

export default App;
