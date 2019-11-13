//useRef is a hook that you can use to keep a mutable value b/w renders
//using the concept of controlled components
import React, { useState, useRef } from 'react';
import FontAwesome from 'react-fontawesome';
import { StyledSearchBar, StyledSearchBarContent } from '../styles/StyledSearchBar'

//no implicit return here b/c we're going to have logic in this component
// this is going to be a controlled component. Instead of using the built-in state for the input element.
//if you create an input in your html document that will have its own state.
//But with React, you can let the component take over the state & control it itself.
//Look at component: it has a value set to the state. So every time the state changes, the value in the input
//field changes. And we're to set this state value in our doSearch function.
//So this works in a cycle: We type in the text in our input field, that will trigger the doSearch function that will update the state. And in turn the input field will get its value from the state. & this a controlled component.
//State value and input value will always be in sync this way.
const SearchBar = ({ callback }) => {
    const [state, setState] = useState('');
    const timeOut = useRef(null); //give it value of null, to start with; creates lag so the user has some time before search kicks in.

    const doSearch = event => {
        const { value } = event.target;

        //if you have a value you want to be able to mutate & that you want to keep b/w your renders, then useRef.
        clearTimeout(timeOut.current);
        setState(value);

        //When the user types something, it will wait for half a second before invoking our callback function that will trigger a search. That gives the user some time to type in a complete word. 
        //Create callback function in Home component as you will need the value in Home.js b/c when you trigger the search you will do that from the Home component. You have to create callback function in Home.js & send the function in as a prop to the SearchBar. We are going to need the value in our Home component b/c when we trigger doSearch we are doing that from Home component. If we had created callback function in here (SearchBar) there's no way to grab our values in our Home component to make a search. 
        timeOut.current = setTimeout(() => {
            callback(value);
        }, 500);
    }

    return (
        <StyledSearchBar>
            <StyledSearchBarContent>
                <FontAwesome className="fa-search" name="search" size="2x" />
                <input
                    type="text"
                    placeholder="Search Movie"
                    onChange={doSearch}
                    value={state}
                />
            </StyledSearchBarContent>
        </StyledSearchBar>
    )
}

export default SearchBar;