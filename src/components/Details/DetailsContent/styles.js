import styled from 'styled-components';

export const Wrapper = styled.section`
  color: ${(props) => props.theme.textSecondary};
  grid-area: main;

  strong {
    font-weight: 600;
    margin-bottom: 0.5rem;
    display: inline-block;
  }

  .data-wrapper {
    background: ${(props) => props.theme.bgElements};
    padding: 1rem 0.5rem;
    border-radius: 5px;
    margin-bottom: 0.5rem;
  }

  .row {
    display: grid;
    grid-template-columns: 1fr;

    @media screen and (min-width: 540px) {
      grid-template-columns: 1fr 1fr;
      gap: 0.5rem;
    }
  }

  .type {
    font-size: smaller;
    opacity: 0.6;
    font-style: italic;
  }
`;
