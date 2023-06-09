// We have to first import `useState` with React in order to take advantage of the hook
import React, { useState } from 'react';

function Greeting() {
  // Declare a state variable `greeting` using `useState`
  // Give the method to update it a name, `setGreeting`
  // useState accepts one argument for the default or initial value of the state variable. In our case, we set it to "Welcome the following students to class!".
  const [greeting, setGreeting] = useState(
    'Welcome the following students to class!'
  );
  // Convert `group` to a state variable using the `useState` hook.
  // Set to an initial value to an array including three students in your class. (ex. ["John", "Grace", "Jared"])
  const [group, setGroup] = useState(['gary', 'jon', 'paul']);
  const [student, setStudent] = useState('') 

  function handleStudentUpdate (){
    setGroup([...group, student])
  }
  function handleFormChange (event){
    console.log(event.target.value)
    setStudent(event.target.value)
  }
  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">State activity!</div>
      <div className="card-body">
        {/* Render the `greeting` state variable */}
        <p className="card-text">{greeting}</p>
        <ul>
          {/* Render each member from the `group` array */}
        {
          group.map(function(element, id){
            return <li key={id}>{element}</li>
            
          })
        }
        </ul>
        <input onChange={handleFormChange}>
        </input>
        <button onClick={handleStudentUpdate}>add a new name here!</button>
      </div>
    </div>
  );
}

export default Greeting;
