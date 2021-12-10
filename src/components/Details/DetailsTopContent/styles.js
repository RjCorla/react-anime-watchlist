import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  color: ${(props) => props.theme.textSecondary};
  grid-template-columns: 1fr;
  gap: 1rem;
  grid-template-areas: 'poster' 'main';

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: 'poster main main';
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas: 'poster main main main';
  }

  .poster {
    width: 100%;
    max-width: 250px;
    justify-self: center;
    grid-area: poster;

    img {
      width: 100%;
    }
  }

  main {
    display: flex;
    justify-content: center;
    flex-direction: column;
    grid-area: main;

    header {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.5rem;
      margin-bottom: 1rem;
      justify-items: center;

      @media screen and (min-width: 480px) {
        grid-template-columns: repeat(8, auto);
        justify-items: start;
      }

      .pop,
      .air {
        display: none;

        @media screen and (min-width: 480px) {
          display: grid;
        }
      }

      h5 {
        font-weight: 600;

        .fa-star {
          color: #fbbf24;
        }

        .fa-heart {
          color: #dc2626;
        }

        span {
          margin-left: 5px;
        }
      }
    }

    .title {
      font-size: 1.4rem;
      margin-bottom: 0.5rem;
    }

    article {
      opacity: 0.9;
      font-size: 14px;
      line-height: 1.2rem;
      margin-bottom: 1rem;
    }
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 540px) {
    flex-direction: row;
  }

  .btn {
    padding: 0.5rem;
    border-radius: 3px;
    border: none;
    background: ${(props) => props.theme.btnBg};
    color: ${(props) => props.theme.btnText};
    font-weight: 600;

    &:hover {
      background: ${(props) => props.theme.btnHover};
      cursor: pointer;
    }

    &:disabled {
      pointer-events: none;
      opacity: 0.5;
    }
  }

  .trailer {
    background: #dc2626;
    margin-bottom: 0.5rem;

    &:hover {
      background: #b91c1c;
    }
  }

  .group {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;

    @media screen and (min-width: 540px) {
      all: unset;

      .btn {
        margin-left: 0.5rem;
      }
    }
  }
`;

export const NoImage = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.1);

  h6 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.6;
  }
`;
