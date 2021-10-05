import React from 'react';
import Button from '../Button/Button';

function Newsletter() {
    return (
        <div id="newsletter">
            <h1 className="title-section">
                <span>Newsletter</span>
                Contactez nous
            </h1>
            <div className="newsletter-submit">
                <input type="text" className="newsletter-input" placeholder="Your email or number"/>
                <Button btnStyle="btn-primary">Subscribe</Button>
            </div>
        </div>
    )
}

export default Newsletter;
