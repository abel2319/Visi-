import React from 'react';
import CardPricing from './cardPricing';
import { item } from './itemPricing';

function Pricing() {
    return (
        <section id="pricing">
            <h1 className="title-section">
                <span>Pricing</span>
                Ours Pricing
            </h1>
            <div className="card-container">
                {
                    item.map((item, index)=>{
                        return (
                            <CardPricing key={index} item={item}/>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Pricing;