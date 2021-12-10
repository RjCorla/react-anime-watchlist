import styled from 'styled-components';

export const ResultWrapper = styled.div`
  background: ${(props) => props.theme.bgElements};
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 3px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  font-size: 14px;

  @media screen and (min-width: 420px) {
    grid-template-columns: auto 1fr;
  }

  .poster {
    max-width: 150px;

    img {
      width: 100%;
      display: block;
    }
  }

  .details {
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;

    h2 {
      font-size: 1.2em;
      margin-bottom: 0.5rem;

      a {
        text-decoration: none;
        color: ${(props) => props.theme.textSecondary};

        &:hover {
          opacity: 0.9;
        }
      }
    }

    .sub-details {
      list-style: none;
      margin-bottom: 0.5rem;
    }

    .summary {
      display: none;
      margin-bottom: 0.5rem;

      @media screen and (min-width: 540px) {
        display: block;
      }
    }

    .addTo {
      display: grid;
      grid-template-columns: 1fr;
      gap: 0.5rem;

      @media screen and (min-width: 540px) {
        grid-template-columns: 1fr 1fr;
      }

      button {
        background: ${(props) => props.theme.btnBg};
        color: ${(props) => props.theme.btnText};
        cursor: pointer;
        padding: 5px 10px;
        border-radius: 3px;
        border: none;
        font-weight: 600;

        &:hover {
          background: ${(props) => props.theme.btnHover};
        }

        &:disabled {
          pointer-events: none;
          opacity: 0.5;
        }
      }
    }
  }
`;
