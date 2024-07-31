import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import BookingForm from './pages/BookingForm';
import Confirmation from './pages/Confirmation';

function App() {
    return(
    <>
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={MovieList} />
          <Route path="/movie/:id" component={MovieDetails} />
          <Route path="/booking/:id" component={BookingForm} />
          <Route path="/confirmation/:id" component={Confirmation} />
        </Switch>
      </div>
    </Router>
    </>
  );
}



export default App;
