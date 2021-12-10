import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { ResultWrapper } from './styles'
import { GlobalContext } from '../../../context/GlobalState'

const ResultCard = ({ result }) => {
    const {watchlist, watched, addToWatchlist, addToWatched, removeFromWatchlist} = useContext(GlobalContext)

    // ? check if anime already exist on watchlist or watched
    let storedAnime = watchlist.find(o => o.mal_id === result.mal_id)
    let storedWatchedAnime = watched.find(o => o.mal_id === result.mal_id)

    // ? disabled button if ?
    const watchlistDisabled = storedAnime ? true : storedWatchedAnime ? true : false
    const watchedDisabled = storedWatchedAnime ? true : false

    // ? handle click event
    const handleWatchlist = (anime) => {
        const newAnime = {
            mal_id: anime.mal_id,
            image_url: anime.image_url,
            title: anime.title
        }

        addToWatchlist(newAnime)
    }

    const handleWatched = (anime) => {
        const newAnime = {
            mal_id: anime.mal_id,
            image_url: anime.image_url,
            title: anime.title
        }

        addToWatched(newAnime)

        if(storedAnime) removeFromWatchlist(anime.mal_id)
    }

    return (
        <ResultWrapper>
            <div className="poster">
                <Link to={`./anime/${result.mal_id}`}><img src={result.image_url} alt={result.title}/></Link>
            </div>

            <div className="details">
                <h2><Link to={`./anime/${result.mal_id}`}>{result.title}</Link></h2>

                <ul className='sub-details'>
                    <li>{result.episodes} {result.episodes > 1 ? 'episodes' : 'episode'}</li>
                    <li>
                        <span style={{marginRight: '1rem'}}><i className="fas fa-star" style={{color: '#F59E0B', marginRight: '2px'}}></i>{result.score}</span>
                        {result.airing && (<span>AIRING</span>)}
                    </li>
                    <li>
                        <span style={{marginRight: '1rem'}}>{result.type}</span>
                        <span>{result.rated}</span>
                    </li>
                </ul>

                <div className="summary">
                    {result.synopsis}
                </div>

                <div className="addTo">
                    <button onClick={() => handleWatchlist(result)} disabled={watchlistDisabled}>Add To Watchlist</button>
                    <button onClick={() => handleWatched(result)} disabled={watchedDisabled}>Add To Watched</button>
                </div>
            </div>
        </ResultWrapper>
    )
}

export default ResultCard
