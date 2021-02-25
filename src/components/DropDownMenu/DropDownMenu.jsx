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
    } = props

    const ChooseMovie = (elements, index) => {
        document.querySelector(".input-field").value = elements.original_title;
        let arr = [];
        arr.push(elements);
        setMovieCardsList(arr);
        setShowDropDownList(false);
    }

    if (isLoading && showDropDownList && movieList.length>0) {
        return(
            <div className="movie-field">
                {movieList.slice(0, 8).map((elements, index) => (
                    <button className="movie-wrapper" key={index} tabIndex={0} onClick={() => ChooseMovie(elements, index)}>
                        <b className="movie-name">{elements.original_title}</b>
                        <b className="movie-info">{elements.vote_average} Rating, {elements.release_date.substring(0, 4)}</b>
                    </button>
                ))}
            </div>
        )
    } else if (!isLoading && showDropDownList) {
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
  };

export default DropDownMenu;