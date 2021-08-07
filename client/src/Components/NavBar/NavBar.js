import React, {useState, useRef, useEffect} from 'react';
import Logo from '../../Images/logo.png';
import { listMenu, listSocial } from './NavBarList';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";



function NavBar() {
    const menu = useRef(null);
    const [active, setActive] = useState(false);

    function handleNav(){
        setActive(!active);
    }

    useEffect(()=>{
        menu.current.classList.add("menu-active")
    });

    return (
        <nav>
            <div ref={menu} id="nav" className="nav">
                <img src={Logo} alt="Mon Logo" className="logo"/>

                <div className="header-icon" onClick={handleNav}>
                    <FontAwesomeIcon icon={ active ? faTimes : faBars }/>
                </div>

                <ul className={active ? "menu menu-nav-active" : "menu"}>
                    {
                        listMenu.map((navItem, index)=>{
                            return (
                                <li key={index} className="menu-item" ><a className="menu-item-link" href={navItem.url}>{navItem.name}</a></li>
                            )
                        })
                    }
                </ul>

                <ul className="menu-social">
                    {
                        listSocial.map((socialItem, index)=>{
                            return (
                                <li key={index} className="menu-social-item" ><a className="menu-social-link" href={socialItem.url}> <FontAwesomeIcon icon={socialItem.name}/> </a></li>
                            )
                        })
                    }
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;