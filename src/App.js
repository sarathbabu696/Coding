import React from 'react';
// import logo from './logo.svg';
import './App.css';


import Cover from './common/components/cover/cover';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        {/* <a> */}
        <Cover />
        {/* </a> */}

        <div id="loaderForApp" className="loader-container">
          {/* <div className="loader"></div> */}
          <div className="loader"><div></div><div></div><div></div><div></div></div>
        </div>

      </header>
    </div>
  );
}

export default App;
