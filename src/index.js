// Impert the React And ReactDOM Libararies
import React from 'react';
import ReactDOM from 'react-dom';

const clickMe = {text : 'Click Here'};
const buttonStyle = { backgroundColor: 'blue', color: 'white' }

// Create a React Component
const App = () => {
   
  return (
    <div>
      <label className="label" htmlFor="name">Enter Name:</label>
      <input id="name" type="text" />
      <button style={buttonStyle}>{clickMe.text}</button>
    </div>
  );
};

// Take the React Component and show it on the screen
ReactDOM.render (<App />, document.querySelector ('#root'));
