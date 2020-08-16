import React from 'react';
import Skills from '../src/componants/skills';
import Description from './componants/Description';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App d-flex">
      <Skills></Skills>
      <Description></Description>
    </div>
  );
}

export default App;
