import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from './components/Header/Header';

const  App = () => {
  return (
    <BrowserRouter>
    <div className="AppWrapper">
      <Header/>
    </div>
    </BrowserRouter>
  );
}

export default App;
