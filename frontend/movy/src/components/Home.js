import React, { useState, useEffect } from 'react'
import {
    API_URL,
    API_KEY,
    IMAGE_BASE_URL,
    BACKDROP_SIZE,
    POSTER_SIZE
} from '../config';
//import components
import HeroImage from './elements/HeroImage'
import SearchBar from './elements/SearchBar'
import Grid from './elements/Grid'
import MovieThumb from './elements/MovieThumb'
import Spinner from './elements/Spinner'
import LoadMoreBtn from './elements/LoadMoreBtn'

//custom Hook
import { useHomeFetch } from './hooks/useHomeFetch'

const Home = () => {
    //deconstruct array returned by custom hook
    const [{ movies, loading, error }, fetchMovies] = useHomeFetch();
    console.log(movies);
    return (
        <>
            {/* <div>results: {(movies) ? movies.movies[0] : "nothing yet"}</div> */}
            <SearchBar />
            <Grid />
            <MovieThumb />
            <Spinner />
            <LoadMoreBtn />
        </>
    )
}

export default Home;