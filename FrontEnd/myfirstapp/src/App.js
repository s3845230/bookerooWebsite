import React, { Component } from "react";
import "./App.css";
// import Dashboard from "./components/Dashboard";
import Header from "./components/Layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.js';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import AddPerson from "./components/Persons/AddPerson";
import { Provider } from "react-redux";
import store from "./store";

import Landing from "./components/Layout/Landing";
import PublisherLanding from "./components/Publisher/PublisherLanding";
// import Register from "./components/UserManagement/Register";
// import Login from "./components/UserManagement/Login";
import UploadBook from "./components/BookManagement/UploadBook";
import Footer from "./components/Layout/Footer";
import SearchResults from "./components/ViewBooks/SearchResults";


class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            {
              //Public Routes
            }
            <Route exact path="/" component={Landing} />
            <Route exact path="/publisher" component={PublisherLanding} />
            <Route exact path="/searchResults" component={SearchResults} />
            {/*<Route exact path="/register" component={Register} />*/}
            {/*<Route exact path="/login" component={Login} />*/}

            {
              //Private Routes
            }
            {/*<Route exact path="/dashboard" component={Dashboard} />*/}
            {/*<Route exact path="/addPerson" component={AddPerson} />*/}
            <Route exact path="/uploadBook" component={UploadBook} />
          
          </div>
          <div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;