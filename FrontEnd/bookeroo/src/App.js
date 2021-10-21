import React, { Component } from "react";
import "./App.css";
import Header from "./components/Layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.js';
import { BrowserRouter as Router, Route } from "react-router-dom";
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
import AdminFunctions from "./components/Admin/AdminFunctions";

import jwt_decode from "jwt-decode";
import setJWTToken from "./securityUtils/setJWTToken";
import { SET_CURRENT_USER } from "./actions/types";
import { logout } from "./actions/securityActions";
import SecuredRoute from "./securityUtils/SecureRoute";
import DevTestPage from "./components/DevTestPage";
import AddUser from "./components/Admin/AddUser";
import ViewBooks from "./components/Admin/ViewBooks";
import EditBook from "./components/Admin/EditBook";

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
            <Route exact path="/landing" component={Landing} />
            <Route exact path="/publisher" component={PublisherLanding} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/devtestpage" component={DevTestPage} />

            {/*Private Routes*/}
            <Route exact path="/searchResults" component={SearchResults} />
            <Route exact path="/publisher/uploadBook" component={UploadBook} />
            <Route path="/searchResults/:id" component={BookInfo} />
            <Route exact path="/admin" component={AdminFunctions} />
            <Route exact path="/admin/addUser" component={AddUser} />
            <Route exact path="/admin/viewAllBooks" component={ViewBooks} />
            <Route path="/admin/viewAllBooks/editBook/:id" component={EditBook} />

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