import styled from 'styled-components';

export const CardWrapper = styled.div`
  color: ${(props) => props.theme.textSecondary};
  width: 100%;
  max-width: 250px;
  border-radius: 5px;

  &:hover .poster .overlay {
    border: 2px solid #21d07a;
  }

  &:hover {
    .show {
      opacity: 1;
    }
  }

  .poster {
    position: relative;
    border-radius: inherit;
    overflow: hidden;
    width: 100%inherit;
    max-width: 240px;
    height: 250px;

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 2px solid transparent;
      transition: all 0.3s ease;
      z-index: 1;
      border-radius: inherit;
    }

    img {
      width: 100%;
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      object-fit: cover;
      height: 100%;
    }
  }

  h2 {
    text-align: center;
    font-size: 1.1rem;
    font-weight: 600;
    margin-top: 5px;

    a {
      text-decoration: none;
      color: ${(props) => props.theme.textSecondary};
    }
  }
`;
