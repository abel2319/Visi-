import React from 'react';

function Button(props) {
    return (
        <button className={props.class}>
            {props.children}
        </button>
    )
}

export default Button;
