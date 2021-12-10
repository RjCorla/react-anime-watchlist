import styled from 'styled-components';

export const Switcher = styled.label`
  width: 50px;
  height: 26px;
  display: inline-block;
  cursor: pointer;

  input {
    display: none;

    &:checked + .toggle-wrapper .toggle {
      transform: translateX(24px);
    }
  }

  .toggle-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 999px;
    background: ${(props) => props.theme.toggleBg};

    .toggle {
      position: absolute;
      top: 2px;
      left: 2px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 22px;
      height: 22px;
      transition: transform 400ms;
      background: ${(props) => props.theme.toggle};
      border-radius: 50%;
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);

      i {
        font-size: 14px;
        color: ${(props) => props.theme.textPrimary};
      }
    }
  }
`;
