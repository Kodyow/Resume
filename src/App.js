import resume from './resume.json'
import logo from './logo.svg';
import Header from './components/header.js'
import About from './components/about.js'
import Content from './components/resume.js'
import { useEffect, useState } from 'react';

//import './App.css';

function App() {
  const [zoom,setZoom] = useState(1);
  const getSize = () => {
    setZoom((window.outerWidth)/ window.innerWidth);
    console.log(zoom);
  }
  useEffect(() => {
    window.addEventListener("resize",getSize,false);
    getSize();
    return function cleanup() {

    }
  });


  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> 
      */
      }
  
      
      
      <Header/>
      <About main={resume.main} zoom={zoom}/>
      <div className='letterform'>
        <Content main={resume.resume}/>
      </div>

    </div>
  );
}

export default App;
