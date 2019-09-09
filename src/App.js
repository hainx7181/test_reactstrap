import React, { Fragment } from 'react';
// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <Fragment>
      <Header />
      <Main />
    </Fragment>
  );
}

export default App;
