import React from 'react'
import { Link } from 'react-router-dom'

import { CardWrapper } from './styles'
import Controls from './Controls'

const AnimeCard = ({ anime, type }) => {
    return (
        <CardWrapper>
            <div className="poster">
                <div className="overlay"></div>
                <img src={anime.image_url} alt={anime.title} />
                <Controls anime={anime} type={type} />
            </div>

            <h2 title={anime.title}><Link to={`/anime/${anime.mal_id}`}>{anime.title.length <= 18 ? anime.title : `${anime.title.substring(0, 18)}...`}</Link></h2>
        </CardWrapper>
    )
}

export default AnimeCard
