import React from 'react';
import "./bigCard.scss";
import PropTypes from "prop-types";

function BigCard (props) {
    const { element, index } = props;
    return (
        <div className="big-card">
            <img 
                className="poster" 
                key={index} 
                src={`https://image.tmdb.org/t/p/w500${element.poster_path}`} 
                alt="movie poster."
            />
            <div className="movie-info">
                <h3 className="movie-name">{element.original_title}</h3>
                <div className="movie-details">
                    {element.release_date} / vote {element.vote_average} 
                </div>
                <p className="movie-summary">SUMMARY</p>
                <p className="movie-summary-text"> {element.overview}</p>
                <a 
                className="movie-button"
                href={`https://www.youtube.com/results?search_query=${element.original_title.split(' ').join('+')}`}
                >
                    WATCH TRAILER
                </a>
            </div>
        </div>
    )
}

BigCard.propTypes = {
    index: PropTypes.number,
    element: PropTypes.object,
  };
  
export default BigCard;