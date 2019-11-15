import React from 'react'
import { Link } from '@reach/router'

import RMDBLogo from '../images/spectate-logo.svg'
import TMDBLogo from '../images/tmdb_logo.svg'

import { StyledHeader, StyledRMDBLogo, StyledTMDBLogo } from '../styles/StyledHeader'

const Header = () => (
    <StyledHeader>
        <div className="header-content">
            <Link to="/">
                <StyledRMDBLogo src={RMDBLogo} alt="rmdb-logo" />
            </Link>
            <StyledTMDBLogo src={TMDBLogo} alt="tmdb-logo" />
        </div>
    </StyledHeader>
)

export default Header;