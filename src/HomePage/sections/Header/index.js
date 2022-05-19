import React, { useState } from 'react';
import CartProducts from '../../../components/CartProducts';
import NavItem from '../../../components/NavItem';
import { CARTPRODUCTS } from '../../../dataRequest/CARTPRODUCTS';
import SearchBar from '../../../components/SearchBar';
import Account from '../../../components/Account';
import classNames from 'classnames';
import './header.css';
import PhoneHeader from '../../../components/PhoneHeader';

export default function Header() {

    const [hover, setHover] = useState(false);
    const data = CARTPRODUCTS;
    let subtotal = 0;
    let qty = 0;

    data.forEach(product => {
        subtotal += product.qty * product.price;
        qty += product.qty;
    });

    const emptyCart = classNames({
        'productsQty-header': true,
        'emptyCart': qty === 0
    });

    const shoppingItems = classNames({
        'shoppingItems-header': true,
        'hovered': hover
    });

    return (
        <header>
            <div className="topContent-header">
                <div className="search-image">
                    <SearchBar />
                    <div className="image-header">
                        <img src="https://i.postimg.cc/4d8fKB79/logo-Auaha-Header.png" alt="Logo Auaha Header" />
                    </div>
                </div>
                <div className="account-phone-cart">
                    <Account />
                    <PhoneHeader />
                    <div 
                        className="cart-header"
                        onMouseOver={() => setHover(true)}
                        onMouseOut={() => setHover(false)}
                    >
                        <i className="fas fa-bag-shopping"></i>
                        <div className={emptyCart}>
                            <p>{qty}</p>
                        </div>
                        <div className={shoppingItems}>
                            <div className="products-header">
                                {data.map((item, index) => (
                                    <CartProducts key={index} data={item} />
                                ))}
                            </div>
                            <div className="subTotalFinish-header">
                                <div className="subTotal-header">
                                    <p className="gray-txt">Subtotal</p> 
                                    <p>R$ {subtotal.toFixed(2).replace('.', ',')}</p>
                                </div>
                                <div className="finish-header">
                                    <button>Finalizar compra</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="navContent-header">
                <div className="navBar-header">
                    <NavItem src="https://i.postimg.cc/15h22gCx/anel-prata.png" alt="Anel de Prata">Anéis</NavItem>
                    <NavItem src="https://i.postimg.cc/fWXGqcsN/brinco-prata.png" alt="Brinco de Prata">Brincos</NavItem>
                    <NavItem src="https://i.postimg.cc/JzBqLKGP/colar-prata.png" alt="Colar de Prata">Colares</NavItem>
                    <NavItem src="https://i.postimg.cc/rmhWWtDD/pingente.png" alt="Pingente de Ouro">Pingentes</NavItem>
                    <NavItem src="https://i.postimg.cc/YqLgG0MS/pulseira-prata.png" alt="Pulseira de Prata">Pulseiras</NavItem>
                    <NavItem src="https://i.postimg.cc/9XKwh2ZH/kits.png" alt="Kits de Prata">Kits</NavItem>
                </div>
            </div>
        </header>
    )
};