import React from 'react';

function Button(props) {
    return (
        <button className={`${props.btnStyle} btn`}>
            <a href="www.google">{props.children}</a>
        </button>
    )
}

export default Button;
