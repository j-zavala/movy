//useCallback stops our useEffect to go into an infinity loop
import React, { useState, useEffect, useCallback } from 'react';
import { API_KEY, API_URL } from '../../config';

export const useMovieFetch = movieId => {
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    //Going to use movieId inside useCallback, meaning this function will change on every render b/c we are depending on an external value (movieId).
    //We added dependency array with value [movieId], means that the function will only change when the movieId changes. This prevents an infinity loop.
    //We didn't send endpoint to async b/c we actually need two endpoints b/c first we get the basic data for a movie, then we fetch the movie credits from which we separate directors and actors.
    //the combo of [] + useCallback means that it will only change when movieId changes, so it's the same movie id all the time
    const fetchData = useCallback(async () => {
        setError(false);
        setLoading(true);

        try {
            //endpoint grabs data for particular movie
            const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
            const result = await (await fetch(endpoint)).json();
            //calling this endpoint gets us credits of the specific movie
            const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
            const creditsResult = await (await fetch(creditsEndpoint)).json();

            const directors = creditsResult.crew.filter(
                member => member.job === 'Director'
            );

            setMovie({
                ...result,
                actors: creditsResult.cast,
                directors
            });

        } catch (error) {
            setError(true);
        }
        setLoading(false)
    }, [movieId])

    useEffect(() => {
        if (localStorage[movieId]) {
            //Grabbing from local storage
            setMovie(JSON.parse(localStorage[movieId]));
            setLoading(false);
        } else {
            //Grabbing from the API
            fetchData();
        }
    }, [fetchData, movieId]);

    useEffect(() => {
        //
        localStorage.setItem(movieId, JSON.stringify(movie));
    }, [movieId, movie]);

    //Here, we are not returning a function that grab data for us b/c we are just fetching this when we mount this component, we are not going to have something like Load More button.
    return [movie, loading, error];
}