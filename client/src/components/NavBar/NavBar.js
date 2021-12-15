import React from 'react';
import logo from '../../images/monLogo.jpg';
import Link from './NavListElement';

const navlink = Link.navlink;

function NavBar() {
    return (
        <nav>
            <div>
                <img src={logo} alt="logo Visi+"/>
            </div>
            <ul>
               {
                   navlink.map((element, index)=>{
                       return (
                           <li key={index}><a href={element.link}>{element.name}</a></li>
                       )
                   })
               }
            </ul>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </nav>
    )
}

export default NavBar
