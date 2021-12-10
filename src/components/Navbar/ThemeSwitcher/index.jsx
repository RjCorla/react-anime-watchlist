import React from 'react'

import { Switcher } from './styles'

const ThemeSwitcher = ({ isDarkTheme, setIsDarkTheme }) => {
    return (
        <Switcher>
            <input onChange={() => setIsDarkTheme(!isDarkTheme)} type="checkbox" />
            <div className="toggle-wrapper">
                <div className="toggle">
                    <i className={`far ${isDarkTheme ? 'fa-moon' : 'fa-sun'}`}></i>
                </div>
            </div>
        </Switcher>
    )
}

export default ThemeSwitcher
