import React from 'react';
import './newsNTrending.css';

export default function NewTrending() {
    return (
        <section className="newTrending-section">
            <div 
                className="newsContainer"
                onMouseEnter={(e) => e.target.style.filter = 'blur(5px)'}
                onMouseLeave={(e) => e.target.style.filter = 'blur(0px)'}
            >
                <img src="https://i.postimg.cc/4x30RZLP/news.jpg" alt="Garota utilizando um colar" />
                <p>Novidades</p>
            </div>
            <div 
                className="trendingContainer"
                onMouseEnter={(e) => e.target.style.filter = 'blur(5px)'}
                onMouseLeave={(e) => e.target.style.filter = 'blur(0px)'}
            >
                <img src="https://i.postimg.cc/wjsGjFzR/trends.jpg" alt="Garota cruzando as mãos mostrando anel" />
                <p>Destaques</p>
            </div>
        </section>
    )
}