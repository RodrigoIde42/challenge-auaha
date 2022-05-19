import React, { useState } from 'react';
import classNames from 'classnames';

export default function PhoneHeader() {

    const [hover, setHover] = useState(false);

    const phoneHover = classNames({
        'fas fa-phone-volume': true,
        'hovered': hover
    });

    return (
        <div 
            className="phoneNumber-header"
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
        >
            <i className={phoneHover} data-fa-transform="rotate-320" />
            <p>(99) 99999-9999</p>
        </div>
    )
}