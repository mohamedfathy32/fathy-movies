import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";
import MovieInfo from "./pages/MovieInfo/MovieInfo";
import MoviesNowPlaying from "./pages/MoviesNowPlaying/MoviesNowPlaying";
import FavoriteMovies from "./pages/favoriteMovies/favoriteMovies";
import AppLayout from "./component/AppLayout/AppLayout";
import { Provider } from "react-redux";
import store from "./store/store";
import MovieSearch from "./pages/MovieSearch/MovieSearch";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "movies", element: <Movies /> },
      { path: "favoriteMovies", element: <FavoriteMovies /> },
      { path: "now_playing", element: <MoviesNowPlaying /> },
      { path: "movie/:id", element: <MovieInfo /> },
      { path: "mov/:search", element: <MovieSearch /> },

      { path: "/*", element: <NotFoundPage /> },
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
