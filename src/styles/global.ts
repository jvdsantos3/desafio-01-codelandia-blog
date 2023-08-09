import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.principal};
    background: ${({ theme }) => theme.colors['dark-30']};
    line-height: 32px;
  }
`
