import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';

import Posts from "./components/posts.component";
import PostForm from "./components/postform.component";


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome To React</h1>
          </header>
          <PostForm />
          <hr    />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
