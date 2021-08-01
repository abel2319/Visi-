import React from 'react';
import Button from '../Button/Button';
import HeaderIllustration from '../../Images/HeaderIllustration.svg'

function Header() {
    return (
        <header id="header" className="header">
            <div className="header-text">
                <h1 className="text-h1 text-h1-header">Lorem <span>ipsum</span>  dolor sit amet consectetur</h1>
                <h2 className="text-h2 text-h2-header">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia.</h2>
                <Button class="btn btn-header">Demandez un devis</Button>
                <Button class="btn-second btn-second-header">See more</Button>
            </div>
            <div className="header-illustration">
                <img src={HeaderIllustration} alt="illustration" className="header-illustration-img"/>
            </div>
        </header>
    )
}

export default Header;
