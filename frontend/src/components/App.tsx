import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {ToastContainer} from "react-toastify";

import Header from "./header/Header";
import AppRouter from "./AppRouter";
import Footer from "./footer/Footer";

import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  //check auth
  //isLoading => spinner
  return (
    <div>
      <div className="content">
        <Router>
          <Header/>
          <AppRouter/>
        </Router>
      </div>
      <Footer/>
      <ToastContainer/>
    </div>
  );
}
export default App;