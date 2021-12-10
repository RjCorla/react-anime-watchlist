import styled from 'styled-components';

export const Form = styled.form`
  background: ${(props) => props.theme.bgElements};
  padding: 0.5rem;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;

  input {
    width: 100%;
    font-family: 'Lexend Deca', sans-serif;
    outline: none;
    background: transparent;
    border: none;
    padding: 5px;
    font-size: 1rem;
    color: ${(props) => props.theme.textSecondary};
  }

  button {
    outline: none;
    padding: 5px;
    border: none;
    background: transparent;
    cursor: pointer;

    i {
      font-size: 1rem;
      color: ${(props) => props.theme.textSecondary};
    }
  }
`;
