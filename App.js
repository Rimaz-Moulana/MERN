import React from "react"; 
import "./App.css";


function App() {

  return (
    <div className="App">
      <h1>CRUD Using MERN</h1>

      <label>Course Id</label>
      <input type="text"/>
      <label>Course Name</label>
      <input type="text"/>
      <label>Course Credit</label>
      <input type="number"/>

      <button>Add to List</button>
       
    </div>
  );
}

export default App;
