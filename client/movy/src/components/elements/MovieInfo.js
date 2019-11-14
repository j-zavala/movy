import React from 'react';

import NoImage from '../images/no_image.jpg';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';

import MovieThumb from './MovieThumb';
import { StyledMovieInfo } from '../styles/StyledMovieInfo';

const MovieInfo = ({ movie }) => (
    <StyledMovieInfo backdrop={movie.backdrop_path}>
        <div className="movieinfo-content">
            <div className="movieinfo-thumb">
                <MovieThumb
                    image={
                        movie.backdrop_path
                            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                            : NoImage
                    }
                    clickable={false}
                />
            </div>
            <div className="movieinfo-text">
                <h1>{movie.title}</h1>
                <h3>PLOT</h3>
                <p>{movie.overview}</p>
            </div>
        </div>
    </StyledMovieInfo>
);

export default MovieInfo;