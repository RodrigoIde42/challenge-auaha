import React, { useState } from 'react';
import classNames from 'classnames';
import './account.css';

export default function Account() {

    const [hover, setHover] = useState(false);

    const accountOptions = classNames({
        'accountOptions-header': true,
        'hovered': hover
    });
    
    const userHovered = classNames({
        'fas fa-user': true,
        'userHovered': hover
    });

    return (
        <div className="account-header">
            <div 
                className="myAccount-header"
                onMouseOver={() => setHover(true)}
                onMouseOut={() => setHover(false)}
            >
                <i className={userHovered} />
                <p>Minha conta</p>
            </div>
            <div 
                className={accountOptions}
                onMouseOver={() => setHover(true)}
                onMouseOut={() => setHover(false)}
            >
                <div className="signInOptions-header">
                    <h4>Entrar</h4>
                    <h4>Cadastrar</h4>
                </div>
                <div className="otherOptions-header">
                    <p>Meus pedidos</p>
                    <p>Minha conta</p>
                    <p>Sair</p>
                </div>
            </div>
        </div>
    )
}