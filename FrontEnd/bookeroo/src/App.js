import './App.css';
import Dashboard from "./components/Dashboard";
import {BrowserRouter as Router, Route} from "react-router-dom";
import AddBook from "./components/Book/AddBook";
import React from 'react';
import {Provider} from "react-redux";
import store from "./store";

function App() {
  return (
      <Provider store={store}>
          <Router>
              <Route exact path="/"           component={Dashboard} />
              <Route exact path="/addBook"    component={AddBook} />
          </Router>
      </Provider>
  );
}

export default App;
