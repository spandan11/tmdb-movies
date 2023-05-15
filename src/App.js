import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Movielist from './components/MovieList/Movielist';
import Movie from './pages/MovieDetails/Movie';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='movie/:id' element={<Movie />} />
          <Route path='movies/:type' element={<Movielist />} />
          <Route path='*' element={<h1>Page not found</h1>} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
