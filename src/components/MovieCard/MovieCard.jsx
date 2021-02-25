import React from 'react';
import "./movieCard.scss";
import PropTypes from "prop-types";
import SmallCard from "./Smallcard";
import BigCard from "./BigCard";

function MovieCard(props) {
    const { movieCardsList } = props;

    if (Array.isArray(movieCardsList) && movieCardsList.length === 1) {
        return (
            <div className="movies-wrapper">
                    <BigCard element={movieCardsList[0]} />
            </div>
        )
    } else if (Array.isArray(movieCardsList) && movieCardsList.length > 1) {
        return (
            <div className="movies-wrapper">
                {movieCardsList.slice(0, 8).map((element, index) => (
                    <SmallCard index={index} element={element} key={index} />
                    ))}
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
}

MovieCard.propTypes = {
    movieCardsList: PropTypes.array,
};

export default MovieCard
