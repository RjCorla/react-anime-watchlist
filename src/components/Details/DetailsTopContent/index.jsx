import React, { useContext } from 'react'

import { GridContainer, ButtonGroup, NoImage } from './styles'
import { GlobalContext } from '../../../context/GlobalState'

const DetailsTopContent = ({ details }) => {
    const { watchlist, watched, addToWatchlist, addToWatched, removeFromWatchlist } = useContext(GlobalContext)

    // ? checked if anime already added on watchlist or watched to disable button
    const isAddedToWatchlist = watchlist.find(anime => anime.mal_id === details.mal_id)
    const isAddedToWatched = watched.find(anime => anime.mal_id === details.mal_id)

    // * handle events
    const handleAddToWatchlist = (anime) => {
        const newAnime = {
            mal_id: anime.mal_id,
            title: anime.title,
            image_url: anime.image_url
        }

        addToWatchlist(newAnime)
    }

    const handleAddToWatched = (anime) => {
        const newAnime = {
            mal_id: anime.mal_id,
            title: anime.title,
            image_url: anime.image_url
        }

        addToWatched(newAnime)
        if(isAddedToWatchlist) {
            removeFromWatchlist(anime.mal_id)
        }
    }

    return (
        <GridContainer>
            <div className="poster">
                {details.image_url ? (
                    <img src={details.image_url} alt={details.title}/>
                ) : <NoImage><h6>no image available</h6></NoImage>}
            </div>

            <main>
                {details.score || details.popularity || details.airing || details.rank ? (
                    <header>
                        {details.score && <h5><i className="fas fa-star"></i><span>Score {details.score}</span></h5>}
                        {details.rank && <h5><i className="fas fa-heart"></i><span>Ranked {details.rank}</span></h5>}
                        {details.popularity && <h5 className='pop'>Popularity #{details.popularity}</h5>}
                        {details.airing && <h5 className='air'>AIRING</h5>}
                    </header>
                ) : ''}

                <h2 className='title'>{details.title}</h2>

                {details.synopsis && <article>{details.synopsis}</article>}
                
                <ButtonGroup>
                    <button className='btn trailer'>Watch trailer</button>
                    
                    <div className="group">
                        <button disabled={isAddedToWatched ? true : isAddedToWatchlist ? true : false} onClick={() => handleAddToWatchlist(details)} className='btn'>Add To Watchlist</button>
                        <button disabled={isAddedToWatched} onClick={() => handleAddToWatched(details)} className='btn'>Add To Watched</button>
                    </div>
                </ButtonGroup>
            </main>
        </GridContainer>
    )
}

export default DetailsTopContent
