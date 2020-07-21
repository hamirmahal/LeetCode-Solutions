import ReverseInteger from './problems/ReverseInteger';
import React from 'react';
import logo from './logo.svg';
import{BrowserRouter,Link,Route}from'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter><div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo"
        alt="logo" />
        <Route component={ReverseInteger}
        path="/7.ReverseInteger" /><br />
        <Link to="/">Home Page</Link><br />
        <Link className="Easy" to="/7.ReverseInteger">
          7. Reverse Integer (easy)</Link><br />
        <a className="App-link" href=
        "https://github.com/hamirmahal/LeetCode-Solutions"
        target="_blank" rel="noopener noreferrer">
        View the source code on Hamir's GitHub.</a>
      </header>
    </div></BrowserRouter>
  );
}

export default App;
