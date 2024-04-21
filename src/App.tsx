import './App.css'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from './darkTheme'
import { RootStyle } from './rootStyle'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './router'

function App() {

  return (
    <ThemeProvider theme={lightTheme}> 
      <RootStyle>
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
      </RootStyle>
    </ThemeProvider>
  )
}

export { App }