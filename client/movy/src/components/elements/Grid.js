import React from 'react'
import { StyledGrid, StyledGridContent } from '../styles/StyledGrid'
import PropTypes from 'prop-types'

//children prop is going to be auto-created for us; grabs the components nested inside the of the component we're in
//so children is going to contain all of the props mapped out in MovieThumb in Home.js
const Grid = ({ header, children }) => (
    <StyledGrid>
        <h1>{header}</h1>
        <StyledGridContent>{children}</StyledGridContent>
    </StyledGrid>)

Grid.propTypes = {
    header: PropTypes.string
}

export default Grid;