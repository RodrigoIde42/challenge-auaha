import React, { useState } from 'react';
import classNames from 'classnames';
import './searchBar.css'

export default function SearchBar() {

    const [search, setSearch] = useState('');
    const [hover, setHover] = useState(false);

    const searchInput = classNames({
        'searchInput-header': true,
        'empty' : search === ''
    }); 

    const searchSuggestions = classNames({
        'searchSuggestions-header': true,
        'hovered': hover
    });

    return (
        <div className="searchBar-header">
            <input 
                className={searchInput} 
                type="search" 
                placeholder="O que deseja encontrar?" 
                value={search} 
                onChange={(e) => setSearch(e.target.value)}
                onMouseOver={() => setHover(true)}
                onMouseOut={() => setHover(false)}
            />
            <div 
                className={searchSuggestions}
                onMouseOver={() => setHover(true)}
                onMouseOut={() => setHover(false)}
            >
                <div className="searchSuggestionsHeader-header">
                    <p>Sugestões</p>
                    <ul>
                        <li>Brinco</li>
                        <li>Brinco Prata</li>
                        <li>Brinco Ouro</li>
                    </ul>
                </div>
                <div className="searchSuggestionsItems-header">
                    <img src="https://i.postimg.cc/0jfB5BbT/anel-ouro-carrinho.png" alt="Anel de Ouro" />
                    <p>Anel Banhado Ouro Reto Com Zirconia</p>
                </div>
                <div className="searchSuggestionsItems-header">
                    <img src="https://i.postimg.cc/63VHzmL8/brinco-prata-carrinho.png" alt="Brinco Prata" />
                    <p>Anel Banhado Ouro Reto Com Zirconia</p>
                </div>
            </div>
        </div>
    )
}