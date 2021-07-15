import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useState, useRef, useEffect } from 'react';
import { MenueItems } from './MenueItems';

const themeActive = {
    active: {
        backgroundColor: "#002147",
        color: "white"
    },
    noActive: {
        backgroundColor: "transparent",
        color: "#002147"
    }
}

function NavBar() {
    const intersection = useRef(null);

    useEffect(() => {

        const oberserver = new IntersectionObserver((entries) => {
            entries.forEach(entrie=>{
                if(entrie.intersectionRatio === 1){
                    // On verra bien ;) ;) ;)
                }
            })
        }, {
            root: null,
            margin: 0,
            threshold: 1.0
        })

        oberserver.observe(intersection.current);

    }, [intersection])


    const [active, setActive] = useState(false);

    function handleActive() {
        setActive(!active);
    }

    return (<>
        <div id="intersection" ref={intersection}></div>
        <nav id="nav-bar" style={active ? themeActive.active : themeActive.noActive}>
            <div id="contain-logo-icon">
                <h1 id="logo">V/+</h1>
                <div className="icon">
                    <FontAwesomeIcon onClick={handleActive} icon={!active ? faBars : faTimes} />
                </div>
            </div>
            
            <ul className={!active ? "menu" : "menu active"}>
                {
                    MenueItems.map((item, index) => {
                        return (
                            <li key={index} className={item.className}>
                                {/* eslint-disable-next-line */}
                                <a href={item.url}>{item.nameItem}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    </>
    );
}

export default NavBar;