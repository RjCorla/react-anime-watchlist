import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavBarWrapper = styled.header`
  width: 100%;
  height: auto;
  background: #032541;
  padding: 0.5rem 0;

  @media screen and (min-width: 768px) {
    height: 66px;
  }

  .content {
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      height: 100%;
    }

    .brand-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 0.5rem;

      @media screen and (min-width: 768px) {
        margin-bottom: unset;
      }

      .brand {
        font-family: 'Berkshire Swash', cursive;
        color: #f9fafb;
        margin-right: 1rem;
        font-size: 1.6rem;
        letter-spacing: 1px;

        & > a {
          text-decoration: none;
          color: inherit;
        }
      }
    }

    nav {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
    }
  }
`;

export const LinkItem = styled(Link)`
  text-decoration: none;
  color: #e5e7eb;
  margin-left: 1.5rem;

  &:first-child {
    margin-left: 0;
  }
`;

export const AddAnime = styled(LinkItem)`
  background: ${(props) => props.theme.btnBg};
  border-radius: 3px;
  padding: 5px 10px;
  color: ${(props) => props.theme.btnText};
  font-weight: 600;

  &:hover {
    background: ${(props) => props.theme.btnHover};
  }
`;
