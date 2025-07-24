import { useState } from 'react';

export default function Nav() {
  const [btnColor, setBtnColor] = useState('#95c47e');

  function getRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
  }

  const changeColor = () => {
    setBtnColor(getRandomColor());
  };

  return (
    <nav>
      <a href="#">GALLERY</a>
      <a href="#">HOME PAGE</a>
      <button
        style={{
          backgroundColor: btnColor,
          color: '#fff',
          padding: '10px 16px',
          border: '2px solid black',
          borderRadius: '6px',
          marginLeft: '20px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}
        onClick={changeColor}
      >
        Random color!
      </button>
    </nav>
  );
}