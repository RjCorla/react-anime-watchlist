import styled from 'styled-components';

export const AsideWrapper = styled.aside`
  color: ${(props) => props.theme.textSecondary};
  padding: 1rem;
  background: ${(props) => props.theme.bgElements};
  border-radius: 5px;
  grid-area: aside;

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;

    @media screen and (min-width: 768px) {
      all: unset;
    }

    li {
      list-style: none;
      margin-bottom: 0.5rem;
    }
  }

  strong {
    display: block;
    font-weight: 600;
  }

  .genres,
  .broadcast {
    margin-bottom: 0.5rem;
  }
`;
