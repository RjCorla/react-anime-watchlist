import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 2.5rem 0;
  color: ${(props) => props.theme.textSecondary};

  header {
    font-family: 'Lexend Deca', sans-serif;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;

    h1 {
      color: ${(props) => props.theme.textPrimary};
    }
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  justify-content: center;

  @media screen and (min-width: 540px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: 1054px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

export const NoAnime = styled.h2`
  color: ${(props) => props.theme.textSecondary};
  opacity: 0.6;
  font-size: 14px;
  font-weight: normal;
`;
