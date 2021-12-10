import React from 'react'

import { AsideWrapper } from './styles'
import NA from './NA'

const Aside = ({ details }) => {
    const formatArrOfObj = (arr) => {
        return arr.map(item => item.name)
    } 

    return (
        <AsideWrapper>
            {details.genres.length > 0 && (
                <div className="genres">
                    <strong>Genres</strong>
                    <i><small>{formatArrOfObj(details.genres).join(', ')}</small></i>
                </div>
            )}

            <ul>
                <li><strong>Episodes</strong><small>{details.episodes || <NA />}</small></li>

                <li><strong>Duration</strong><small>{details.duration || <NA />}</small></li>

                <li><strong>Source</strong><small>{details.source || <NA />}</small></li>

                <li><strong>Score</strong><small>{details.score || <NA />}</small></li>

                <li><strong>Scored By</strong><small>{details.scored_by || <NA />}</small></li>
                
                <li><strong>Ranked</strong><small>{details.rank || <NA />}</small></li>

                <li><strong>Popularity</strong><small>{details.popularity || <NA />}</small></li>

                <li><strong>Favorites</strong><small>{details.favorites || <NA />}</small></li>

                <li><strong>Members</strong><small>{details.members || <NA />}</small></li>

                <li><strong>Type</strong><small>{details.type || <NA />}</small></li>

                <li><strong>Status</strong><small>{details.status || <Na />}</small></li>

                <li><strong>Premiered</strong><small>{details.premiered || <NA />}</small></li>
            </ul>

            {details.airing && (<div className='broadcast'><strong>Broadcast</strong><small>{details.broadcast || <NA />}</small></div>)}

            <div>
                <strong>Rating</strong>
                <small>{details.rating || <Na />}</small>
            </div>
        </AsideWrapper>
    )
}

export default Aside
