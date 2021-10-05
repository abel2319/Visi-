import React, {useRef} from 'react';
import Button from '../Button/Button';
import {useIntersectionObserver} from '../../FunctionTools/FunctionTool';

function CardPricing(props) {
    let div = useRef(null)
    useIntersectionObserver(div, "card-active", 0.2);

    let {type, style, price, advantage} = props.item;
    return (
        <div ref={div} className={`card ${style} card-${props.keys}`}>
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
