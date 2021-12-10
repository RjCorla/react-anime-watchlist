import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const BackButton = ({ children }) => {
    const history = useHistory()

    return (
        <>
            <ButtonStyled onClick={() => history.goBack()}>
                <i className="fas fa-arrow-left"></i>
                Back
            </ButtonStyled>
            {children}
        </>
    )
}

export default BackButton

// ? styled 
const ButtonStyled = styled.span`
    padding: 0.5rem 1rem;
    border-radius: 3px;
    background: ${props => props.theme.bgElements};
    color: ${props => props.theme.textSecondary};
    margin-bottom: 2rem;
    display: inline-block;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.25);
    cursor: pointer;

    i {
        margin-right: 0.5rem;
    }
`