import React, { Component } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import HeaderFooter from "./components/Layout/HeaderFooter";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddPerson from "./components/Persons/AddPerson";
import { Provider } from "react-redux";
import store from "./store";

import Landing from "./components/Layout/Landing";
import PublisherLanding from "./components/Publisher/PublisherLanding";
import Register from "./components/UserManagement/Register";
import Login from "./components/UserManagement/Login";
import UploadBook from "./components/BookManagement/UploadBook";

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <HeaderFooter />
            {
              //Public Routes
            }
            <Route exact path="/" component={Landing} />
            <Route exact path="/publisher" component={PublisherLanding} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />

            {
              //Private Routes
            }
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/addPerson" component={AddPerson} />
            <Route exact path="/uploadBook" component={UploadBook} />
          
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;