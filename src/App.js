import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages";
import { About } from './pages/about'
import { News } from './pages/news'
import { Projects } from './pages/projects'
import HeroSection from "./components/heroSection";
import { Sidebar } from "./components/sidebar";
import { Navbar } from "./components/navbar";
import Footer from "./components/footer";

//backend, views count
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [info, setInfo] = useState(true);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const firebaseConfig = {
    apiKey: "AIzaSyBNN1t82sFc-CWUyyW8Mpsmo4zQnqot63s",
    authDomain: "dma-5c98f.firebaseapp.com",
    projectId: "dma-5c98f",
    storageBucket: "dma-5c98f.appspot.com",
    messagingSenderId: "601101583020",
    appId: "1:601101583020:web:08fcb8e80fa3e898fe9509",
    measurementId: "G-8T01HY2VVN",

  };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  useEffect(() => {
    document.title = "Home | DMA"
  }, [])
  return (
    <Router>
      <div className='bg-black'>
        {info ?
          <HeroSection change={setInfo} />
          :
          <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Switch>
              <Route exact path="/"  ><Home /></Route>
              <Route exact path="/drmusa" ><About /></Route>
              <Route exact path="/news" ><News /></Route>
              <Route exact path="/projects"><Projects /></Route>
            </Switch>
            <Footer />
          </>}
      </div>
    </Router>
  );
}

export default App;
