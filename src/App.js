import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from './components/Header/Header';
import MainPage from './components/MainBody/MainPage';

const  App = () => {
  return (
    <BrowserRouter>
    <div className="AppWrapper">
      <Header/>
      <div className='MainBody'>
        <MainPage />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
