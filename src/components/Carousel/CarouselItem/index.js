import React from 'react';

export default function CarouselItem(props) {
    return (
        <div className="carouselItem" style={{width: props.width}}>
            {props.children}
        </div>
    )
}