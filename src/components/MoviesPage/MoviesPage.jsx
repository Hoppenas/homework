import './moviesPage.scss';
import React, { useState, useEffect } from 'react';
import { ReactComponent as Movie } from "../../assets/icons/movie.svg";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import Button from '../Button/Button';
import MovieCard from '../MovieCard/MovieCard';
import debounce from '../../utils/debounce';
import api_key from '../../utils/APIkey';

function MoviePage() {
    const [movie, setMovie] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [movieList, setMovieList] = useState([])
    const [showDropDownList, setShowDropDownList] = useState(false);
    const [movieCardsList, setMovieCardsList] = useState([])

    const handleChange = (event) => {
        setIsLoading(true);
        if (event.target.value.length>=3) {
            setMovie(event.target.value)
        }
    };
    
    useEffect(() => {
        if (movie) {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${movie}`)
              .then(res => {
                  if(res.status === 200) {
                      return res.json();
                  }
                  throw Error('error happenend while fetching API')
              })
              .then(
                (result) => {
                    setMovieList(result.results);
                    setIsLoading(false);
                    if (isLoading) {setShowDropDownList(true)};
                    setMovie("");
                },
              )
              .catch(
                  (error) => {
                      setIsLoading(false);
                      console.log(error);
                  }
              )
        }
    }, [movie])

    const searchMovie = () => {
        setShowDropDownList(false);
        setMovieCardsList(movieList);
    };

  return (
      <div>
        <div className="header">
            <div className="header-wrapper">
                <div className="input">
                    <Movie className="input-logo"/>
                    <input
                        type="text"
                        className="input-field"
                        placeholder="Enter a movie name"
                        onChange={debounce(handleChange, 500)}
                        id="112"
                    >
                    </input>
                    <DropDownMenu 
                        movieList={movieList} 
                        showDropDownList={showDropDownList} 
                        setShowDropDownList={setShowDropDownList} 
                        isLoading={isLoading} 
                        setMovieCardsList={setMovieCardsList}
                        setMovie={setMovie}
                    />
                </div>
                <Button click={searchMovie} />
            </div>
        </div>     
        <MovieCard  
            movieCardsList={movieCardsList}
        />
      </div>
  );
}

export default MoviePage;