import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from './Components/LoginForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <div className='w-full max-w-md p-8 bg-white rounded shadow-md text-gray-900 justify-start '>
          <h1 className='text-base'>Register Form</h1>
          <LoginForm />
        </div>
        
        
          
      </header>
    </div>
  );
}

export default App;
