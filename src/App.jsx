import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { darkTheme, lightTheme, GlobalStyle } from './theme'
import { GlobalProvider } from './context/GlobalState'
import NavBar from './components/Navbar'
import Watchlist from './components/Watch/Watchlist'
import Watched from './components/Watch/Watched'
import AddAnime from './components/AddAnime'
import Details from './components/Details'

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  return (
    <GlobalProvider>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Router>
          <NavBar isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />

          <Switch>
            <Route path='/' exact component={Watchlist} />
            <Route path='/watched' component={Watched} />
            <Route path='/anime' exact component={AddAnime} />
            <Route path='/anime/:id' component={Details} />
          </Switch>
        </Router>
      </ThemeProvider>
    </GlobalProvider>
  )
}

export default App