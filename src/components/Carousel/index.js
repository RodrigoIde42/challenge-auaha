import React, { Children, cloneElement, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import './carousel.css';

export default function Carousel(props) {

    const [activeIndex, setActiveIndex] = useState(0);

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = Children.count(props.children) - 1;
        } else if (newIndex >= Children.count(props.children)) {
            newIndex = 0;
        }

        setActiveIndex(newIndex);
    }

    const handlers = useSwipeable({
        onSwipedLeft: () => updateIndex(activeIndex + 1),
        onSwipedRight: () => updateIndex(activeIndex - 1),
    });

    return (
        <div {...handlers} className="carousel">
            <div className="inner" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                { Children.map(props.children, (child, index) => {
                    return cloneElement(child, {width: "100%"})
                })}
            </div>
            <div className="arrows">
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
            <div className="changeImageButton">
            { Children.map(props.children, (child, index) => {
                return (
                    <button
                        onClick={() => {updateIndex(index)}}
                    >
                        <i className={`fas fa-circle ${index === activeIndex ? "active" : ""}`}/>
                    </button>
                )})
            }
            </div>
        </div>
    )
}