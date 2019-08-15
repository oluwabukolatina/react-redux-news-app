import React from 'react';
import Search from "./components/Search";
import './App.css'
import Posts from "./components/Posts";

const App = () => {
    return (
        <div className="App">
          <header className="App-header">
            <h1>NRead</h1>
          </header>
          <Search />
          <Posts/>
        </div>
    );
};

export default App;