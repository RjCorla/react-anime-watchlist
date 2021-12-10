import React, { useContext } from 'react'

import { Wrapper, NoAnime, GridContainer } from './styles'
import { GlobalContext } from '../../context/GlobalState'
import CountPill from './CountPill'
import AnimeCard from './AnimeCard'

const Watchlist = () => {
    const { watchlist } = useContext(GlobalContext)

    return (
        <Wrapper>
            <div className="container">
                <header>
                    <h1>Watchlist</h1>

                    <CountPill count={watchlist.length} />
                </header>

                <main>
                    {watchlist.length > 0 ? (
                        <GridContainer>
                            {watchlist.map(anime => (
                                <AnimeCard key={anime.mal_id} anime={anime} type='watchlist' />
                            ))}
                        </GridContainer>
                    ) : <NoAnime>No Anime on Watchlist. Add Some!</NoAnime>}
                </main>
            </div>
        </Wrapper>
    )
}

export default Watchlist
