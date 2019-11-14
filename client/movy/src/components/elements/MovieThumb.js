import React from 'react'
import { Link } from '@reach/router'
import { StyledMovieThumb } from '../styles/StyledMovieThumb'

const MovieThumb = ({ image, movieId, clickable }) => (
    <StyledMovieThumb>
        {clickable ? (
            /* here where we link to the movie, we are also sending movie id as a parameter */
            <Link to={`/${movieId}`}>
                <img className="clickable" src={image} alt="moviethumb" />
            </Link>
        ) : (
                <img src={image} alt="moviethumb" />
            )
        }
    </StyledMovieThumb >
)

export default MovieThumb;