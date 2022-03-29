import React from 'react';
import './style.css';

const Actor = ({name, as}) => {
    return (
        <p className="actor">
            {name} <br></br><span>as {as}</span>
        </p>
    );
}

export default Actor;