import React from 'react';
import { Router } from '@reach/router';
import Home from './Home';
import Header from './elements/Header';
import { GlobalStyle } from './styles/GlobalStyle'

const App = () => (
    <>
        <Header />
        <Router>
            <Home path="/" />
            <Movie path="/:movieId" />
            <NotFound default />
        </Router>
        <GlobalStyle />
    </>
);

export default App;
