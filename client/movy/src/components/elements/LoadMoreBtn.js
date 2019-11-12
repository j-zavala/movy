import React from 'react';

import { StyledLoadMoreBtn } from '../styles/StyledLoadMoreBtn';

//callback function when you click on the function
const LoadMoreBtn = ({ text, callback }) => (
    <StyledLoadMoreBtn type={text} onClick={callback}>
        {text}
    </StyledLoadMoreBtn>
)

export default LoadMoreBtn;