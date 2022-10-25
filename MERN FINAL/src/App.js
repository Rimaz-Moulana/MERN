// import React from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

// // import logo from './logo.svg';
// // import './App.css';

// import Navbar from "./components/navbar.component";
// import StudentList from "./components/student-list.component";
// import EditStudent from "./components/edit-student.component";
// import CreateStudent from "./components/create-student.component";

// function App() {
//   return (
//     <Router>
//       <Navbar>
//       <br/>
//       <Route path="/" component={StudentList} exact={true}/>
//       <Route path="/edit/:id" component={EditStudent} />
//       <Route path="/create" component={CreateStudent} />
//     </Navbar></Router>
//   );
// }

// export default App;

import React from 'react';
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import list from "./components/list";
import edit from "./components/edit";
import create from "./components/create";


const App = () => {
  return(
    <Router>
      <Navbar />
      
        <Switch>
          <Route path='/' component={list} exact> <list /></Route>
          <Route path='/edit' component={edit} exact><edit /></Route>
          <Route path='/create' component={create} exact><create /></Route>
        </Switch>
    </Router>
  )
}

export default App;
