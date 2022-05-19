import React, { useState } from 'react';
import PromotionProducts from '../../../components/PromotionProducts';
import { PROMOTIONPRODUCTS } from '../../../dataRequest/PROMOTIONPRODUCTS';
import './promotions.css';

export default function Promotions() {

    const data = PROMOTIONPRODUCTS;
    const [activeIndex, setActiveIndex] = useState(0);

    const updateIndex = (index) => {
        if (index > 1 || index < 0) {
            setActiveIndex(0);
        }
        else {
            setActiveIndex(index);
        }
    }

    return (
        <section className="promotions-section">
            <div className="promotionsTitle">
                <h2>Promoções</h2>
            </div>
            <div className="promotionsContainer">
                <div className="promotionCarousel" style={{transform: `translateX(-${activeIndex * 50}%)`}}>
                    {
                        data.map((item, index) => (
                            <PromotionProducts key={index} data={item} />
                        ))
                    }
                </div>
            </div>
            <div className="promotionArrows">
                <button 
                    onClick={() => updateIndex(activeIndex - 1)}
                >
                    <i className="fas fa-angle-left" />
                </button>
                <button
                    onClick={() => updateIndex(activeIndex + 1)}
                >
                    <i className="fas fa-angle-right" />
                </button>
            </div>
        </section>
    )
}