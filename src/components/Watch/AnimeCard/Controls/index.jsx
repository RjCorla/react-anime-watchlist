import React, { useContext } from 'react'

import { GlobalContext } from '../../../../context/GlobalState'
import { ControlsWrapper } from './styles'

const Controls = ({ anime, type }) => {
    const { addToWatchlist, addToWatched, removeFromWatched, removeFromWatchlist} = useContext(GlobalContext)

    const handleMoveToWatched = anime => {
        addToWatched(anime)
        removeFromWatchlist(anime.mal_id)
    }
    
    const handleMoveToWatchlist = anime => {
        addToWatchlist(anime)
        removeFromWatched(anime.mal_id)
    }

    return (
        <ControlsWrapper className='show'>
            {type === 'watchlist' && (
                <>
                    <button onClick={() => handleMoveToWatched(anime)}>
                        <i className="fa-fw far fa-eye"></i>
                    </button>

                    <button onClick={() => removeFromWatchlist(anime.mal_id)}>
                        <i className="fa-fw fa fa-times"></i>
                    </button>
                </>
            )}

            {type === 'watched' && (
                <>
                    <button onClick={() => handleMoveToWatchlist(anime)}>
                        <i className="fa-fw far fa-eye-slash"></i>
                    </button>

                    <button onClick={() => removeFromWatched(anime.mal_id)}>
                        <i className="fa-fw fa fa-times"></i>
                    </button>
                </>
            )}
        </ControlsWrapper>
    )
}

export default Controls
