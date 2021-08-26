import React from 'react';
import Button from '../Button/Button';

function CardPricing(props) {
    let {type, style, price, advantage} = props.item;
    return (
        <div className={`card ${style}`}>
            <h1 className="card-title">{type}</h1>
            <span className="card-price">{price}<span>$ttc</span> </span>
            <ul className="card-advantage">
                {
                    advantage.map((item, index)=>{
                        return (
                            <li className="card-item" key={index}>{item}</li>
                        )
                    })
                }
            </ul>
            <Button btnStyle="btn-primary">Demandez un devis</Button>
        </div>
    )
}

export default CardPricing;
