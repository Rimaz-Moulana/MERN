// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// export default class Navbar extends Component {

//     render() {
//         return (
//             <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
//                 <Link to="/" className="navbar-brand">StudentPage</Link>
//                 <div className="collapse navbar-collapse">
//                     <ul className="navbar-nav mr-auto">
//                         <li className="navbar-item">
//                             <Link to="/" className="nav-link">Students</Link>
//                         </li>
//                         <li className="navbar-item">
//                             <Link to="/create" className="nav-link">Create Students Log</Link>
//                         </li>
//                     </ul>
//                 </div>
//             </nav>
//         );
//     }
// }

import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
    return (
      <nav className="navbar">

        <ul className="nav-links">
          <Link to='/'><li>list</li></Link>
          <Link to='/create'><li>create</li></Link>
          <Link to='/edit'><li>edit</li></Link>
        </ul>
      </nav>
    )
}

export default Navbar;