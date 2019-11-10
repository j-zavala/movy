import { useState, useEffect } from 'react';
import { API_URL, API_KEY } from '../../config';

export const useHomeFetch = () => {
    //Here we're creating 3 states, which we create by calling useState; useState takes the initial state (in this case an empty array)  and returns an empty array and a function to update this state.
    // MORE INFO: https://stackoverflow.com/questions/53165945/what-is-usestate-in-react
    //without empty array for movie, you get error. So now  you can try to loop over the array before we get something from the API.
    const [movies, setMovies] = useState({ movies: [] }); //initial state = empty movies array
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

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
            //prev is previous state
            setMovies(prev => ({
                //spreads out all the properties in previous state
                //results property we get back from movie api, contains all the movies
                //...prev does shallow copy the old state, meaning it spreads out all the properties we had in previous state
                ...prev,
                //we want to modify  our properties in the state, so type in properties movies and change what you want to do; that will override the properties that we spread here.
                //results property contains all the movies
                movies: [...result.results] || [],
                //1st we want to check if we already have the hero image in our state & if we do, we don't need to place another there.
                //so use short-circuit: if 1st is true, it keeps 1st image. Otherwise it will run 2nd
                //place hero image if it doesn't appear in our state
                heroImage: prev.heroImage || result.results[0],
                currentPage: result.page,
                totalPages: result.total_pages
            }));

        } catch (error) {
            setError(true);
            console.log(error);
        }

        setLoading(false);
    }

    //method in react hooks where you can trigger a function. we have useEffect INSTEAD of lifecycle method that we had with class components.
    // When using hooks, we're not thinking about lifestyles, just about how our next render will look.
    //How often will this effect run? will run every render (not good, we want to run this just when we started the app and have mounted this component). So provide a dependency array, []
    useEffect(() => {
        fetchMovies(`${API_URL}movie/popular?api_key=${API_KEY}`);
        // [movies] tells React to skip applying an effect if certain values haven’t changed between re-renders.
        //https://reacttraining.com/blog/when-to-use-functions-in-hooks-dependency-array/
    }, []); //optional second argument to useEffect (an array): Says only re-run the effect if movies changes
    //MORE INFO: https://reactjs.org/docs/hooks-effect.html
    // If the movies is "terminator 5", and then our component re-renders with movies still equal to "terminator 5", React will compare [terminator 5] from the previous render and [terminator 5] from the next render. Because all items in the array are the same ("terminator 5"=== "terminator 5"), React would skip the effect. That’s our optimization.

    //This tells React that your effect doesn’t depend on any values from props or state, so it never needs to re-run. If you pass an empty array ([]), the props and state inside the effect will always have their initial values. 

    //return states and function so you can use them inside Home.js component
    return [{ movies, loading, error }, fetchMovies]
}