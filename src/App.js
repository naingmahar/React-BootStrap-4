import React from 'react';
import {BrowserRouter,Route } from 'react-router-dom'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assoc/css/style.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import $ from 'jquery'
import Header from "./componet/header/header"
import Footer from "./componet/footer/footer"
import Login from "./componet/login/login"
import Profile from "./componet/profile/profile"

export default class App extends React.Component {
 
  state ={ }

  UNSAFE_componentWillMount (){ }

  render() {

    return (
      <BrowserRouter>
          <div className="App">
            <Header />
              <div>
                <Route path="/" component={Login} exact/>
                <Route path="/profile" component={Profile} />
              </div>
            <Footer />
          </div>
      </BrowserRouter>
    );
  }
}