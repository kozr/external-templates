import { createGlobalStyle } from 'styled-components'

// Remove comment once font is replaced
export const GlobalStyles = createGlobalStyle`
  * {
    :not(p) {
      margin: 0;
    }
    padding: 0;
    box-sizing: border-box;
  }
  html, body {
    overflow-x: hidden;
    scroll-behavior: smooth;
  }
  body {
    position: relative;
    font-family: ${p => p.theme.typography.bodyFont};
    background: ${p => p.theme.colors.background};
    color: ${p => p.theme.colors.text};
  }
`

export default GlobalStyles
