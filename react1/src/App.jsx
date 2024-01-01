import React, { useState } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const RandomMovingButton = styled.button`
;
justify-content:center;
  position: fixed;
  top: ${({ top }) => `${top}px`};
  left: ${({ left }) => `${left}px`};
  width: 150px;
  height: 50px;
  background-color:pink;
  color: #fff;
  font-size: 26px;
  border: none;
  border-radius: 50px;
  outline: none;
  cursor: pointer;
  transition: top 0.3s ease-in-out, left 0.3s ease-in-out;

  &:hover {
    top: ${({ isMoving }) => isMoving && `${Math.random() * window.innerHeight}px`};
    left: ${({ isMoving }) => isMoving && `${Math.random() * window.innerWidth}px`};
  }
`;
const Texter = styled.h1`
color:Pink;

`;

function App() {
  const [isMoving, setIsMoving] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const handleHover = () => {
    if (!isMoving) {
      const newPosition = {
        top: Math.random() * window.innerHeight,
        left: Math.random() * window.innerWidth,
      };
      setPosition(newPosition);
      setIsMoving(true);
    }
  };

  const handleMouseLeave = () => {
    setIsMoving(false);
  };
  let top= 12;
  let left=10;

  return (

   
  <div class="row">
      <div class="col"><
      h1 color='pink'>Will you be my valentine?</h1>
    </div>

   <div class="row">
    <div class="col-8"><button type="button" class="prabut">Yes</button></div>
    <div class="col-4"><RandomMovingButton
        isMoving={isMoving}
        top={position.top}
        left={position.left}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
       NO
      </RandomMovingButton></div>
  </div>
</div>
  
   
  );
}

export default App;
