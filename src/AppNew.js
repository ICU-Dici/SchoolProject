import './App.css';
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import MainPage from './components/MainBody/MainPage';
import NavigationSide from './components/NavigationSide/NavigationSide';
import PhysicsEGE from './components/PhysicsEGE/PhysicsEGE';
import NavigationSideContainer from './components/NavigationSide/NavigationSideContainer';
import PhysicsEGEContainer from './components/PhysicsEGE/PhysicsEGEContainer';

const  App = () => {
  return (
    <BrowserRouter>
    <div className="AppWrapper">
      <PhysicsEGEContainer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
