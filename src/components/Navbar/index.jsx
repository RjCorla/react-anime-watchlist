import React from 'react'
import { Link } from 'react-router-dom'

import { NavBarWrapper, AddAnime, LinkItem } from './styles.js'
import ThemeSwitcher from './ThemeSwitcher'

const Navbar = ({ isDarkTheme, setIsDarkTheme }) => {
    return (
        <NavBarWrapper>
            <div className="container">
                <div className="content">
                    <div className="brand-wrapper">
                        <div className="brand"><Link to='/'>Anime Watchlist</Link></div>

                        <ThemeSwitcher isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
                    </div>

                    <nav>
                        <LinkItem to='/'>Watchlist</LinkItem>
                        <LinkItem to='/watched'>Watched</LinkItem>

                        <AddAnime to='/anime'>Add Anime</AddAnime>
                    </nav>
                </div>
            </div>
        </NavBarWrapper>
    )
}

export default Navbar
