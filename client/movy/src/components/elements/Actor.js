import React from 'react';
import NoImage from '../images/no_image.jpg';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import { StyledActor } from '../styles/StyledActor';
import PropTypes from 'prop-types';

const Actor = ({ actor }) => (
    <StyledActor>
        <img
            src={
                actor.profile_path
                    ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                    : NoImage
            }
            alt="actorthumb"

        />
        <span className="actor-name">{actor.name}</span>
        <span className="actor-character">{actor.character}</span>
    </StyledActor>
);

//Proptypes checks the type of the prop and makes sure it the type we want before sending the prop in.
//It will complain if you give it the wrong prop from the one you intended to give.
Actor.propTypes = {
    actor: PropTypes.object
}

export default Actor;