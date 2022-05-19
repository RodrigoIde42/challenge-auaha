import React from 'react';
import './products.css';

export default function Products() {
    return (
        <section className="products-section">
            <div className="productsSection-container">
                <div className="ringsNPendants">
                    <div className="rings">
                        <img src="https://i.postimg.cc/vm4kPHnJ/anel-prata-diferente.png" alt="Anel de Prata" />
                        <h3>Anéis</h3>
                    </div>
                    <div className="pendants">
                        <img src="https://i.postimg.cc/655XrKHX/pingente.png" alt="Pingente de Ouro 'A'" />
                        <h3>Pingentes</h3>
                    </div>
                </div>
                <div className="earingsNWrists">
                    <div className="earings">
                        <img src="https://i.postimg.cc/gjy2nKkH/brinco-dourado.png" alt="Brinco Rosa" />
                        <h3>Brincos</h3>
                    </div>
                    <div className="wristbands">
                        <img src="https://i.postimg.cc/yNkLfv67/pulseira-prata.png" alt="Pulseira de Prata" />
                        <h3>Pulseiras</h3>
                    </div>
                </div>
                <div className="necklace">
                    <img src="https://i.postimg.cc/Fzr2VbVZ/colar-prata.png" alt="Colar de Prata" />
                    <h3>Colares</h3>
                </div>
            </div>
        </section>
    )
}