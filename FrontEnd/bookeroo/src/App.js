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
import Register from "./components/Authorisation/Register";
import Login from "./components/Authorisation/Login";
import UploadBook from "./components/BookManagement/UploadBook";
import Footer from "./components/Layout/Footer";
import SearchResults from "./components/ViewBooks/SearchResults";
import BookInfo from "./components/ViewBooks/BookInfo";

import jwt_decode from "jwt-decode";
import setJWTToken from "./securityUtils/setJWTToken";
import { SET_CURRENT_USER } from "./actions/types";
import { logout } from "./actions/securityActions";
import SecuredRoute from "./securityUtils/SecureRoute";
import DevTestPage from "./components/DevTestPage";

const jwtToken = localStorage.jwtToken;

if (jwtToken) {

  setJWTToken(jwtToken);

  const decoded_jwtToken = jwt_decode(jwtToken);

  store.dispatch({
    type: SET_CURRENT_USER,
    payload: decoded_jwtToken
  });

  const currentTime = Date.now() / 1000;

  if (decoded_jwtToken.exp < currentTime) {
    store.dispatch(logout());
    window.location.href = "/";
  }
}


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />

            {/*Public Routes*/}
            <Route exact path="/" component={Landing} />
            <Route exact path="/publisher" component={PublisherLanding} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/devtestpage" component={DevTestPage} />

            {/*Private Routes*/}

            {/*<Route exact path="/dashboard" component={Dashboard} />*/}
            {/*<Route exact path="/addPerson" component={AddPerson} />*/}
            <Route exact path="/publisher/uploadBook" component={UploadBook} />
            <Route exact path="/searchResults/:id" component={BookInfo} />

            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;