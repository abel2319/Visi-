import { useState } from 'react';
import { Items } from './NavBarItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../Images/logo.png';

function NavBar() {

    const [active, setActive] = useState(false);

    function toogleNav(){
        setActive(!active);
    }

    return (
        <nav id="nav">
            <div className="mynav">
                <img src={Logo} alt="Visi+" className="nav-logo"/>
                <div className="menu-button" >
                    <span onClick={toogleNav}><FontAwesomeIcon icon={ !active ? faBars : faTimes}/></span>
                </div>
                <ul className= { active ? "menu menu-visible" : "menu"}>
                    {
                        Items.map((item, index)=>{
                            return(
                                <li key={index} className="menu-item"><a href={item.item_link}>{item.item_name}</a></li>
                            )
                        })
                    }
                </ul>
            </div>
        </nav>
    )
}

export default NavBar
