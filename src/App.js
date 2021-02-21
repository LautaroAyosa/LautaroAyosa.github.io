import logo from './logo.svg';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer.js';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import AboutUs from './components/AboutUs/AboutUs';
import Header from './components/Header/Header';



function App() {
  return (
    <BrowserRouter>
      <Route path='/' component={Header} />
      <Route path='/' component={NavBar}/>
      <Route exact path='/' component={Home}/>
      <Route path='/contact' component= {Contact}/>
      <Route path='/aboutUs' component= {AboutUs}/>
      <Route path='/' component={Footer}/>
      
    </BrowserRouter>
  );
}

export default App;
