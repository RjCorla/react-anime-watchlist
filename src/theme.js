import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  background: '#F3F4F6',
  textPrimary: '#111827',
  textSecondary: '#374151',
  bgElements: '#E5E7EB',

  toggleBg: '#9CA3AF',
  toggle: '#F3F4F6',

  btnText: '#032541',
  btnBg: '#21d07a',
  btnHover: '#1aa762',
};

export const darkTheme = {
  background: '#111827',
  textPrimary: '#F9FAFB',
  textSecondary: '#E5E7EB',
  bgElements: '#1F2937',

  toggleBg: 'linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))',
  toggle: '#032541',

  btnText: '#032541',
  btnBg: '#21d07a',
  btnHover: '#1aa762',
};

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Nunito', sans-serif;
        background: ${(props) => props.theme.background};
        width: 100%;
        min-height: 100vh;
    }

    .container {
        width: 90%;
        max-width: 69rem;
        margin: 0 auto;
        height: 100%;
    }
`;
