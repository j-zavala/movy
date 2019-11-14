import React from 'react';

//Components
import Navigation from './elements/Navigation';
import MovieInfo from './elements/MovieInfo';
import MovieInfoBar from './elements/MovieInfoBar';
import Grid from './elements/Grid';
import Actor from './elements/Actor';
import Spinner from './elements/Spinner';
import useMoveFetch from './hooks/useMovieFetch'

//movieId is the one we sent in that we grab from the URL
const Movie = ({ movieId }) => {
    const [movie, loading, error] = useMoveFetch(movieId);

    if (error) return <div>"Sorry! Something went wrong..."</div>
    if (loading) return <Spinner />;

    return (
        <>
            <Navigation movie={movie.original_title} />
            <MovieInfo />
            <MovieInfoBar />
            <Grid>
                <Actor />
            </Grid>
        </>
    )
}

export default Movie;