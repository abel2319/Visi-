import React from 'react'
import TablePrice from './TablePrice/TablePrice';
function PriceService() {
    return (
        <div className="priceService">
            <h1 className="text-h1 priceService-h1">
                Our <span>Pricing</span>
            </h1>
            <TablePrice/>
        </div>
    )
}

export default PriceService
