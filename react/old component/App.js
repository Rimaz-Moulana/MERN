import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
// import './App.css';
import Navbar from "./components/navbar";
import ExercisesList from "./components/exercise-list";
import EditExercises from "./components/edit-exercise";
import CreateExercise from "./components/create-exercise";
import CreateUser from "./components/create-user";

function App() {
  return (
    <Router>
    {/* <div className='container'> */}
      <Navbar/>
      <br/>
      <Route path="/" exact component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercises} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
    {/* </div> */}
    </Router>
  );
}

export default App;
