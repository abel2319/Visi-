import React from 'react';
import { TableText } from './TableText';
import Button from '../../Button/Button';

export default function TablePrice() {
    return (
        <div id="mainCard">
            {
                TableText.map((card, index)=>{
                    return(
                        <div className="card" key={index} id={`card${index}`}>
                            <h1 className={`card-title card-title${index}`}>{card.title}</h1>
                            <ul className={`card-list card-list${index}`}>
                            {
                                card.offre.map((text, index)=>{
                                    return(
                                        <li key={index} className="card-item">
                                            <div className="pucH"></div>
                                            <div className="pucV"></div>
                                            <span className="card-item-content">{text}</span>
                                        </li>
                                    )
                                })
                            }
                            </ul>
                            <div className={`card-btn card-btn${index}`}>
                                <Button class="btn">Demandez un devis</Button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
