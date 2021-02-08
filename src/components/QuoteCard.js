import React from 'react';
import './QuoteCard.css';

  function QuoteCard({ simpson }) {
      return(
        <div className = 'QuoteCard'>
            <ul>
        <img src={simpson.image} alt={simpson.name}/>
        <p>{simpson.character}</p>
        <blockquote>{simpson.quote}</blockquote>
            </ul>
        </div>
        )
    }



export default QuoteCard;
