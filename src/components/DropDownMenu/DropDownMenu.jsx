import './dropDownMenu.scss';
import React from 'react';
import PropTypes from "prop-types";
import Loader from "../Loading/Loading";

function DropDownMenu(props) {
    const { 
        movieList, 
        showDropDownList, 
        setShowDropDownList, 
        isLoading,
        setMovieCardsList,
        setMovie,
    } = props

    const selectMovie = (movie) => {
        setMovieCardsList([movie]);
        setShowDropDownList(false);
        document.querySelector(".input-field").value = movie.original_title;
        setMovie(movie.original_title);
    }

    if (!isLoading && showDropDownList && movieList.length>0) {
        return(
            <div className="movie-field">
                {movieList.slice(0, 8).map((movie, index) => (
                    <button className="movie-wrapper" key={index} tabIndex={0} onClick={() => selectMovie(movie, index)}>
                        <b className="movie-name">{movie.original_title}</b>
                        <b className="movie-info">{movie.vote_average || '(no data)'} Rating, {movie.release_date ? movie.release_date.substring(0, 4) : '(no data)'}</b>
                    </button>
                ))}
            </div>
        )
    } else if (isLoading && showDropDownList) {
        return(
            <div className="movie-field">
                <div className="movie-wrapper">
                    <Loader />
                </div>
            </div>)
    } else {
        return(
            <div></div>
        )
    }
}

DropDownMenu.propTypes = {
    movieList: PropTypes.array,
    showDropDownList: PropTypes.bool,
    setShowDropDownList: PropTypes.func,
    isLoading: PropTypes.bool,
    setMovieCardsList: PropTypes.func,
    setMovie: PropTypes.func,
  };

export default DropDownMenu;