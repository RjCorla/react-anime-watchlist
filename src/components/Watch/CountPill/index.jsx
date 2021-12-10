import React from 'react'
import styled from 'styled-components'

const index = ({ count }) => {
    return (
        <PillWrapper>
            {count} {count > 1 ? 'animes' : 'anime'}
        </PillWrapper>
    )
}

export default index

// ? styled
const PillWrapper = styled.span`
    background: ${props => props.theme.btnBg};
    padding: 5px 15px;
    border-radius: 999px;
    color: ${props => props.theme.btnText};
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.25);
`
