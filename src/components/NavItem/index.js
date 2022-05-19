import classNames from 'classnames';
import React, { useState } from 'react';
import './navBar.css';

export default function NavItem(props) {

    const [hover, setHover] = useState(false);

    const navItemOptions = classNames({
        'navItemOptions': true,
        'hovered': hover
    });

    const navTitle = classNames({
        'navTitle': 'true',
        'gray-txt': hover
    });

    return (
        <div 
            className="navItem"
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)} 
        >
            <p className={navTitle}>{props.children}</p>
            <div 
                className={navItemOptions}
                onMouseOver={() => setHover(true)}
                onMouseOut={() => setHover(false)} 
            >
                <div className="navItemContainer">
                    <div className="navItemText">
                        <div className="layered-navItem">
                            <p><span>Folheado</span></p>
                            <p className="gray-txt">{props.children === "Anéis" ?  props.children.replace('éis', 'el') : props.children === "Colares" ? props.children.replace('es', '') : props.children.replace(/s([^s]*)$/, ' ')}</p>
                            <p className="gray-txt">Solitária</p>
                            <p className="gray-txt">Cristal</p>
                            <p className="gray-txt">Pérola</p>
                            <p className="gray-txt">Zircônia</p>
                        </div>
                        <div className="silver-navItem">
                            <p><span>Prata</span></p>
                            <p className="gray-txt">{props.children === "Anéis" ?  props.children.replace('éis', 'el') : props.children === "Colares" ? props.children.replace('es', '') : props.children.replace(/s([^s]*)$/, '')}</p>
                            <p className="gray-txt">Solitária</p>
                            <p className="gray-txt">Cristal</p>
                            <p className="gray-txt">Pérola</p>
                            <p className="gray-txt">Zircônia</p>
                        </div>
                        <div className="gold-navItem">
                            <p><span>Ouro</span></p>
                            <p className="gray-txt">{props.children === "Anéis" ?  props.children.replace('éis', 'el') : props.children === "Colares" ? props.children.replace('es', '') : props.children.replace(/s([^s]*)$/, '')}</p>
                            <p className="gray-txt">Solitária</p>
                            <p className="gray-txt">Cristal</p>
                            <p className="gray-txt">Pérola</p>
                            <p className="gray-txt">Zircônia</p>
                        </div>
                    </div>
                    <div className="image-navItem">
                        <img src={props.src} alt={props.alt} />
                    </div>
                </div>
            </div>
        </div>
    )
}