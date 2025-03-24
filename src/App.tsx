import React from 'react';
import NavBar from './components/Navbar'
import About from './components/About'
import Timeline from './components/Timeline'
import Project from './components/Project'
import './styles.scss';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p> */}
      <About />
      <Timeline />
      <Project />
    </div>
  );
}

export default App;
