import { useState } from 'react';

export default function Nav({ onShowHome, onShowGallery }) {
    const [btnColor, setBtnColor] = useState('none');

    function getRandomColor() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    }

    const changeColor = () => {
        setBtnColor(getRandomColor());
    };

    return (
        <nav>
            <button type="button" onClick={onShowGallery}>
                GALLERY
            </button>
            <button type="button" onClick={onShowHome}>
                HOME PAGE
            </button>
            <button
                style={{
                    backgroundColor: btnColor,
                    color: 'black',
                    padding: '10px 16px',
                    border: 'none',
                    borderRadius: '6px',
                    marginLeft: '1100px',
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
