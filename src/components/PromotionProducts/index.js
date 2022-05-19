import classNames from 'classnames';
import React, { useState } from 'react';
import './promotionProd.css';

export default function PromotionProducts({index, data}) {

    const [hover, setHover] = useState(false);

    const promoSpy = classNames({
        'promotionSpy': true,
        'show': hover
    });

    const promoCart = classNames({
        'promotionAddToCart': true,
        'show': hover
    });

    return (
        <div 
            className="promotionItem" 
            key={index}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
        >
            {
                !(isNaN(data.discount)) &&
                <div className="promotionDiscount">
                    <p>{data.discount}% OFF</p>
                </div>
            }
            <div className="promotionImage">
                <img src={data.src} alt={data.name} />
                <div className={promoSpy}>
                    <p className="gray-txt">Espiar</p>
                </div>
            </div>
            <div className="promotionsModifierContent">
                {
                    data.modifiers !== null &&
                    data.modifiers.map(mod => (
                        <div 
                            key={Math.random() * 100} 
                            className={`promotionModifier 
                                ${mod === "Mais Vendidos" ? "bestSeller": ""} 
                                ${mod === "Frete Grátis" ? "freeShipping": ""}
                            `}
                        >
                            <p>{mod}</p>
                        </div>
                    ))
                }
            </div>
            <div className="promotionDesc">
                <p>{data.desc}</p>
            </div>
            <div className="promotionPrice">
                {!(isNaN(data.discount)) ?
                    <>
                        <p className="promotionPriceOld gray-txt">De R${data.price.toFixed(2)}</p>
                        <p className="promotionPriceNew"><span>Por R$ {(data.price - (data.price * (data.discount / 100))).toFixed(2)}</ span></p>
                        <p className="promotionInstallment">6X R$ {(data.price / 6).toFixed(2)} Sem Juros</p>
                    </> :
                    <>
                        <p className="PromotionPriceNew"><span>Por R$ {(data.price).toFixed(2)}</span></p>
                        <p className="promotionInstallment">6X R$ {(data.price / 6).toFixed(2)} Sem Juros</p>
                    </>
                }
            </div>
            <div className={promoCart}>
                <p><i className="fas fa-bag-shopping" />  Adicionar à sacola</p>
            </div>
        </div>
    )
}