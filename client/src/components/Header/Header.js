import './Header.css';
import Button from '../Button/Button';
import Animation1 from '../../Images/website-creator-animate.svg';

export default function Header() {
    return (
        <header id="header">
            <div>
                <h2>Portez votre <span style={{color : "#1A3F99"}}>business</span> vers la dimension web avec <span style={{color : "#1A3F99"}}>Visi+</span></h2>
                <div id="illustration">
                    <img src={Animation1} alt="animation"/>
                </div>
                <div className="btn-inside-header">
                    <Button>Creer votre site web</Button>
                </div>
                <h3>Concevez avec nous votre site web en demandant un devis dès maintenant</h3>
            </div>
        </header>
    )
} 