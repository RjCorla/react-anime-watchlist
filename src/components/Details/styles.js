import styled from 'styled-components';

export const DetailsWrapper = styled.div`
  padding: 2.5rem 0;
  color: ${(props) => props.theme.textSecondary};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-top: 2rem;
  grid-template-areas: 'main' 'aside';

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: 'aside main main';
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas: 'aside main main main';
  }
`;
