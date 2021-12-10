import React from 'react'
import styled from 'styled-components'

const NA = () => {
    return (
        <Wrapper>
            NA
        </Wrapper>
    )
}

export default NA

// ? styled

const Wrapper = styled.span`
    color: ${props => props.theme.textSecondary};
    font-size: smaller;
    font-weight: 600;
    opacity: 0.6;
`
