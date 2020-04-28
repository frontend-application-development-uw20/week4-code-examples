import React, { useState } from 'react';

const colors = ['blue', 'red', 'pink', 'white', 'black', 'yellow', 'green', 'orange'];

const FancyButton = (props) => {
    const [color, setColor] = useState('pink');
    const onClickHandler = () => {
        const idx = Math.floor(Math.random() * colors.length);
        setColor(colors[idx]);
    }

    return (
        <button onClick={onClickHandler} style={{
            backgroundColor: color,
            fontSize: '20px'
        }}>{JSON.stringify(props.objToDisplay)}</button>
    )
};

// const FancyButton = () => {
//     return (
//         <button style={{
//             color: 'pink',
//             fontSize: '20px'
//         }}>FancyButton</button>
//     );    
// }

export default FancyButton;