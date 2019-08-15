import React, {Component} from 'react';
import './App.css'
import Search from "./components/Search";
import Posts from "./components/Posts";

class App extends Component {

  render() {

    return (
        <div className="App">
          <header className="App-header">
            <h1>NRead</h1>
          </header>
          <Search />
          <Posts />
        </div>
    );
  }
}
export default App;