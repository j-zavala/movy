import React, { useState } from 'react'
import {
    POPULAR_BASE_URL,
    SEARCH_BASE_URL,
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

import NoImage from "./images/no_image.jpg";

const Home = () => {
    //deconstruct array returned by custom hook
    const [
        {
            movies: { movies, heroImage, currentPage, totalPages },
            loading,
            error
        }, fetchMovies
    ] = useHomeFetch();
    const [searchTerm, setSearchTerm] = useState('');
    const searchMovies = search => {

    }

    const loadMoreMovies = () => {
        const searchEndpoint = `${SEARCH_BASE_URL}${searchTerm}&page=${currentPage + 1}`;
        const popularEndpoint = `${POPULAR_BASE_URL}&page=${currentPage + 1}`;

        const endpoint = searchTerm ? searchEndpoint : popularEndpoint;

        fetchMovies(endpoint);
    }


    if (error) return <div>Something went wrong ...</div>;
    if (!movies[0]) return <Spinner />;
    return (
        <>
            <HeroImage
                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
                title={heroImage.original_title}
                text={heroImage.overview}
            />
            <SearchBar />
            <Grid header={searchTerm ? 'Search Results' : 'Popular Movies'}>
                {movies.map(movie => (
                    <MovieThumb
                        key={movie.id}
                        clickable
                        image={
                            movie.poster_path
                                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                                : NoImage
                        }
                        movieId={movie.id}
                        movieName={movie.original_title}
                    />
                ))
                }
            </Grid>
            {loading && <Spinner />}
            {currentPage < totalPages && !loading && (
                <LoadMoreBtn
                    text="Load more" callback={loadMoreMovies}
                />
            )}
        </>
    )
}

export default Home;