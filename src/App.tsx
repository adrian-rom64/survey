import React from 'react'
import Container from './Components/Container'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import { ThemeProvider } from '@material-ui/core'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#444',
      main: '#222',
      dark: 'black',
      contrastText: 'white'
    },
    secondary: {
      light: '#f5e7e4',
      main: '#ebd8d4',
      dark: '#c9aaa3',
      contrastText: '#222'
    }
  }
})

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Container />
    </ThemeProvider>
  )
}

export default App
