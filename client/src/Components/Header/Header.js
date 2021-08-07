import React,  {useEffect, useRef} from 'react';
import headerIllustration from '../../Images/header-illustration.svg';
import Button from '../Button/Button';

function Header() {

    const headerH1 = useRef(null);
    const headerText = useRef(null);
    const headerImg = useRef(null);
    const headerButton = useRef(null);

    useEffect(() => {
        headerH1.current.classList.add("header-text-h1-active");
        headerImg.current.classList.add("header-illustration-img-active");
        headerText.current.classList.add("header-text-description-active");
        headerButton.current.classList.add("header-btn-active");
    });

    return (
        <header>
            <div className="header" id="header">
                <div className="header-text">
                    <h1 ref={headerH1} className="header-text-h1 text-h1">
                        Lorem <span>ipsum</span>  dolor sit amet <span>consectetur</span>  adipisicing elit
                    </h1>

                    <p ref={headerText} className="header-text-description">
                        Veritatis culpa illum inventore laborum deleniti ut dolorum et fuga, ex delectus a architecto doloremque nobis iste distinctio. Soluta, doloremque porro! Veniam, molestiae! Sequi nisi omnis vitae praesentium
                    </p>
                    <div ref={headerButton} className="header-btn">
                        <Button btnStyle="btn-primary">Start now</Button>
                        <Button btnStyle="btn-secondary">See more</Button>
                    </div>
                </div>
                <div className="header-illustration">
                    <img ref={headerImg} className="header-illustration-img" src={headerIllustration} alt="Header illustration" />
                </div>
            </div>
        </header>
    )
}

export default Header;
