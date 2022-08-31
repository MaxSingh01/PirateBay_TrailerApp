import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Container } from "@material-ui/core";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav/MainNav";
import Movie from "./Pages/Movie/Movie";
import TvShows from "./Pages/TvShow/TvShows";
import Search from "./Pages/Search/Search";
import Trending from "./Pages/Trending/Trending";
function App() {
  return (
    <Router>
      <Header />
      <div className="app">
        <Routes>
          <Route path="" element={<Trending />} exact />
          <Route path="/movies" element={<Movie />} />
          <Route path="/series" element={<TvShows />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
      <SimpleBottomNavigation />
    </Router>
  );
}

export default App;
