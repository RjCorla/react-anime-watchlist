import React, { useContext } from 'react'

import { Wrapper, NoAnime, GridContainer } from './styles'
import { GlobalContext } from '../../context/GlobalState'
import CountPill from './CountPill'
import AnimeCard from './AnimeCard'

const Watched = () => {
    const { watched } = useContext(GlobalContext)

    return (
        <Wrapper>
            <div className="container">
               <header>
                   <h1>Watched</h1>

                    <CountPill count={watched.length} />
               </header>

               <main>
                   {watched.length > 0 ? (
                       <GridContainer>
                           {watched.map(anime => (
                               <AnimeCard anime={anime} key={anime.mal_id} type='watched' />
                           ))}
                       </GridContainer>
                   ) : <NoAnime>No Anime on Watched. Watch Anime!</NoAnime>}
               </main>
            </div>
        </Wrapper>
    )
}

export default Watched
