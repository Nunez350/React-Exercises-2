import React from 'react';


const char = (props) => {
    const style = {
        display: 'inline-block',
        padding: '16 px',
        margin: '16 px',
        border: '1px solid black',
        textAlign: 'center'

    };

    return (
        <div style = {style}>
            {props.character}


        </div>
    );
};

export default char ;