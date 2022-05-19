import React from 'react';
import './needHelp.css';

export default function NeedHelp() {
    return (
        <div className="needHelp">
            <div className="needHelp-image">
                <i className="fab fa-whatsapp"></i>
            </div>
            <div className="needHelp-text">
                <p><span>Precisa de ajuda?</span></p>
            </div>
        </div>
    )
}