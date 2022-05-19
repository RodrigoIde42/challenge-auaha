import React from 'react';
import './cartProducts.css';

export default function CartProducts({data}) {
    return (
        <div className="cartProducts">
            <div className="image-cartProducts">
                <img src={data.src} alt={data.name} />
            </div>
            <div className="productInfo-cartProducts">
                <div className="productDescInfo-cartProducts">
                    <p>{data.desc}</p>
                    <i className="fas fa-xmark"></i>
                </div>
                <div className="productPriceInfo-cartProducts">
                    <p className='gray-txt'>Qtd. {data.qty}</p>
                    <p>R$ {data.price.toFixed(2).replace('.',',')}</p>
                </div>
            </div>
        </div>
    )
}