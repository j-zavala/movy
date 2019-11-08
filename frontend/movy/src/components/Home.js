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

const Home = () => {
    //without empty array for movie, you get error. So now  you can try to loop over the array before we get something from the API.
    const [movies, setmovies] = useState({ movies: [] });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    //console.log(state);

    //function to fetch movies
    // fetchMovies is an async function b/c when we fetch data from an API we won't exactly know when we get that data
    // endpoint is a parameter
    const fetchMovies = async endpoint => {
        setError(false);
        setLoading(true);
        // try block is executed first; going to try and run this code; if it doesn't work, run the catch
        // in try block is where we grab our data
        try {

            //await tells to wait for data to return before we continue.
            // we have to await 2x here. when we get data from the api, we want to parse that data into json, & that's async so we have to await.
            //fetch is built into javascript used to fetch data from endpoints
            const result = await (await fetch(endpoint)).json();
            console.log(result.results);
            // setmovies(prev => ({
            //     //spreads out all the properties in previous state
            //     //results property we get back from movie api, contains all the movies
            //     ...prev,
            //     movies: [...result.results],
            //     //1st we want to check if we already have the hero image in our state & if we do, we don't need to place another there.
            //     //so use short-circuit: if 1st is true, it keeps 1st image. Otherwise it will run 2nd
            //     heroImage: prev.heroImage || result.results[0],
            //     currentPage: result.page,
            //     totalPages: result.total_pages
            // }));

        } catch (error) {
            setError(true);
            console.log(error);
        }

        setLoading(false);
    }

    //method in react hooks where you can trigger a function. we have useEffect INSTEAD of lifecycle method that we had with class components.
    // When using hooks, we're not thinking about lifestyles, just about how our next render will look.
    //How often will this effect wrong? will run every render (not good, we want to run this just when we started the app and have mounted the this component). So provide a dependency array
    useEffect(() => {
        fetchMovies(`${API_URL}movie/popular?api_key=${API_KEY}`);
    }, [movies]);


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