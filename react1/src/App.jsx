import React, { useState } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css'

import Button from './assets/button';
function App() {
  const [isMoving, setIsMoving] = useState(true);

  const toggleMovement = () => {
    setIsMoving(!isMoving);
  };

  return (
    <center>

      <div className="App">
      <Button
        isMoving={isMoving}
        onClick={toggleMovement}
        onMouseEnter={() => setIsMoving(true)}
        onMouseLeave={() => setIsMoving(false)}
      >
    No
      </Button>
    </div>
    </center>  );
}

export default App;
