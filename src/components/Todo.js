import React from 'react';

function Todo(prop) {
  //prop is the data coming from  <Todo key={todo.id} name={todo.name} deadline={todo.deadline} /> in App.js
  //so you need to define which data(id, name, dedline) you use
  // "prop=todo"
  //if you do <Todo name={todo} >, all the information is in name, so you need to specify prop.name.deadline 
  return (
    <div className="Todo">
        <input type='checkbox' checked={prop.item.completed}
        onChange={() => prop.handleClick(prop.item.id)}/>
        <p style={prop.item.completed? {color:"green"}:null}>{prop.item.name}<br/>{prop.item.deadline}
        </p>
        
    </div>
  );
}


export default Todo;