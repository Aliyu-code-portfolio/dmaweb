import './App.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { Home } from './pages/home'
import { Timer } from './component/timer'
import { NavBar } from './component/navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Support } from './pages/support';
import { About } from './pages/about';
import Media from 'react-media';


//remaining addition to support, about pages 
function App() {
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

  return (
    <Router>
      <Media queries={{ small: { maxWidth: 599 } }}>
        {matches =>
          matches.small ? (
            <div className="AppMobile">
              <NavBar />
              <div className='pages'>
                <Switch>
                  <Route exact path='/'>
                    <Home />
                  </Route>
                  <Route exact path='/support'>
                    <Support />
                  </Route>
                  <Route exact path='/about'>
                    <About />
                  </Route>
                </Switch>
              </div>
              <div className='footerMobile'>
                <div className='space1'>
                  <Timer />
                </div>
                <div className='space2'>
                  <br />
                  <code>&copy;</code> Copyright 2022. All rights reserved
            </div>
              </div>
            </div>
          ) : (
            <div className="App">
              <NavBar />
              <div className='pages'>
                <Switch>
                  <Route exact path='/'>
                    <Home />
                  </Route>
                  <Route exact path='/support'>
                    <Support />
                  </Route>
                  <Route exact path='/about'>
                    <About />
                  </Route>
                </Switch>
              </div>
              <div className='footer'>
                <div className='space1'>
                  <Timer />
                </div>
                <div className='space2'>
                  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<code>&copy;</code> Copyright 2022. All rights reserved
            </div>
              </div>
            </div>
          )
        }
      </Media>

    </Router>
  );
}

export default App;
