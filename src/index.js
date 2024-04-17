import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppNew from './AppNew';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/state-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
export let RenderEntierTree = (state) =>{
  root.render(
    <React.StrictMode>
      <Provider store={store}>
      <AppNew/>
      </Provider>
    </React.StrictMode>
  );

  reportWebVitals();
}

RenderEntierTree(store.getState());
store.subscribe(() => {
  let state = store.getState();
  RenderEntierTree(state);
});


