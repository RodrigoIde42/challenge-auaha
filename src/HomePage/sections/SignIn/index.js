import React, { useState } from 'react';
import './signIn.css';

export default function SignIn() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [focused, setFocused] = useState(false);

    const triggerFocus = (e) => {
        setFocused(!focused);   

        if (focused) 
            e.target.className = 'focused';
        else
            e.target.className = '';
    }

    return (
        <section className="signIn-section">
            <div className="signInTitleNsubTitle">
                <h2>Receba ofertas e novidades</h2>
                <p className="gray-txt">Cadastre-se e receba nossas novidades e promoções</p>
            </div>
            <div className="signInForm">
                <form>
                    <input 
                        type="text" 
                        placeholder='Seu nome' 
                        value={name} 
                        onChange={(e) => setName(e)} 
                        onMouseOver={(e) => triggerFocus(e)} 
                        onMouseLeave={(e) => triggerFocus(e)} 
                    />
                    <input 
                        type="email" 
                        placeholder='Seu e-mail' 
                        value={email} 
                        onChange={(e) => setEmail(e)} 
                        onMouseOver={(e) => triggerFocus(e)} 
                        onMouseLeave={(e) => triggerFocus(e)} 
                    />
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </section>
    )
}