import React, { useState } from 'react';

const ColorSwitcher = () => {
  const [color, setColor] = useState('white');

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  return (
    <div style={{ backgroundColor: color, height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div>
        <h1>Color Switcher</h1>
        <button onClick={() => changeColor('red')}>Red</button>
        <button onClick={() => changeColor('blue')}>Blue</button>
        <button onClick={() => changeColor('green')}>Green</button>
        <button onClick={() => changeColor('yellow')}>Yellow</button>
        <button onClick={() => changeColor('purple')}>Purple</button>
        <button onClick={() => changeColor('black')}>Black</button>
        <button onClick={() => changeColor('white')}>Reset</button>
      </div>
    </div>
  );
};

function App() {
  return (
    <div>
      <ColorSwitcher />
    </div>
  );
}

export default App;
