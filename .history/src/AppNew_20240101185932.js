import './App.css';
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import Header from './components/PhysicsEGE/Header/Header';
import MainPage from './components/MainBody/MainPage';
import NavigationSide from './components/NavigationSide/NavigationSide';
import PhysicsEGE from './components/PhysicsEGE/PhysicsEGE';
import NavigationSideContainer from './components/NavigationSide/NavigationSideContainer';
import PhysicsEGEContainer from './components/PhysicsEGE/PhysicsEGEContainer';

const  App = () => {
  return (
    <BrowserRouter>
    <div className="AppWrapper">
      <Routes>
      <Route path='/NavigationBlock/' element={<NavigationSideContainer/>}/>
      <Route path='/Physics/*' element={<PhysicsEGEContainer/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
