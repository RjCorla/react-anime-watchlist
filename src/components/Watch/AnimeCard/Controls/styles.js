import styled from 'styled-components';

export const ControlsWrapper = styled.div`
  color: #e5e7eb;
  z-index: 5;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.6);
  border-radius: 5px;
  padding: 3px;
  transition: all 300ms ease;
  opacity: 0;

  button {
    color: #fefefe;
    background-color: transparent;
    border: none;
    transition: all 0.3s ease;
    padding: 5px;
    margin: 0;

    &:hover {
      cursor: pointer;
      color: #21d07a;
    }
  }
`;
