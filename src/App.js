 
import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import {Switch} from "react-router"
import Home from './components/Home';
import reactDom from 'react-dom';
import SearchPage from './components/SearchPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route   path="/" exact >Hola</Route> */}
        <Route path='/' element={<Home/>} />
        {/* // component={Home} 
        /> */}
        <Route path="/Search" element={<SearchPage/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
