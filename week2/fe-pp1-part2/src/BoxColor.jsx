import React from 'react';
import "./BoxColor.css";

function BoxColor(props) {
    const { r, g, b } = props;
    const rgbValue = `rgb(${r}, ${g}, ${b})`;

    return (
        <div className='BoxColor'
            style={{ backgroundColor: rgbValue }}>
            <p>{rgbValue}</p>
            <p>{`#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`}</p>

        </div>
    );
}

export default BoxColor;