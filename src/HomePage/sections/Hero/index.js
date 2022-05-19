import React from 'react';
import Carousel from '../../../components/Carousel';
import CarouselItem from '../../../components/Carousel/CarouselItem';
import './hero.css';

export default function Hero() {
    return (
        <section className="hero-section">
            <div className="banner">
                <Carousel>
                    <CarouselItem>
                        <img src="https://i.postimg.cc/fWrWDqh4/full-Banner.png" alt="Banner" style={{width: "100%"}} />
                    </CarouselItem>
                    <CarouselItem>
                        <img src="https://i.postimg.cc/fWrWDqh4/full-Banner.png" alt="Banner" style={{width: "100%"}} />
                    </CarouselItem>
                    <CarouselItem>
                        <img src="https://i.postimg.cc/fWrWDqh4/full-Banner.png" alt="Banner" style={{width: "100%"}} />
                    </CarouselItem>
                    <CarouselItem>
                        <img src="https://i.postimg.cc/fWrWDqh4/full-Banner.png" alt="Banner" style={{width: "100%"}} />
                    </CarouselItem>
                </Carousel>
            </div>
            <div className="info">
                <div className="infoContent">
                    <div className="textInfo">
                        <i className="fas fa-box"></i>
                        <p><span>Frete Grátis</span> nas compras acima de R$299,00</p>
                    </div>
                    <div className="textInfo">
                        <i className="fas fa-credit-card"></i>
                        <p><span>6 vezes sem juros</span> no cartão de crédito</p>
                    </div>
                </div>
            </div>
        </section>
    )
}