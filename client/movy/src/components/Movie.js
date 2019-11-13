import React from 'react';
import Navigation from './elements/Navigation';
import MovieInfo from './elements/MovieInfo';
import MovieInfoBar from './elements/MovieInfoBar';
import Grid from './elements/Grid';
import Actor from './elements/Actor';
import Spinner from './elements/Spinner';

//Components


const Movie = ({ movieId }) => (
    <>
        <Navigation />
        <MovieInfo />
        <MovieInfoBar />
        <Grid>
            <Actor />
        </Grid>
        <Spinner />
    </>
)

export default Movie;