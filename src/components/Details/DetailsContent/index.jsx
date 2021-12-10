import React from 'react'

import { Wrapper } from './styles'

const DetailsContent = ({ details }) => {
    return (
        <Wrapper>
            {details.title_synonyms.length > 0 && (
                <>
                    <strong>Other Names</strong>
                    <div className="data-wrapper">
                        {details.title_synonyms.join(', ')}
                    </div>
                </>
            )}

            {details.title_english && details.title_japanese ? (
                <div className="row">
                    <div className="col">
                        <strong>English Title</strong>
                        <div className="data-wrapper">{details.title_english}</div>
                    </div>

                    <div className="col">
                        <strong>Japanese Title</strong>
                        <div className="data-wrapper">{details.title_japanese}</div>
                    </div>
                </div>
            ) : details.title_english ? (
                <>
                    <strong>English Title</strong>
                    <div className="data-wrapper">{details.title_english}</div>
                </>
            ) : details.title_japanese ? (
                <>
                    <strong>Japanese Title</strong>
                    <div className="data-wrapper">{details.title_japanese}</div>
                </>
            ) : ''}

            {details.related.Adaptation && (
                <>
                    <strong>Adaptation</strong>
                    <div className="data-wrapper">
                        {details.related.Adaptation[0].name}<span className='type'> - {details.related.Adaptation[0].type}</span> 
                    </div>
                </>
            )}

            {details.related.Prequel && details.related.Sequel ? (
                <div className="row">
                    <div className="col">
                        <strong>Prequel</strong>
                        <div className="data-wrapper">{details.related.Prequel[0].name} <span className='type'> - {details.related.Prequel[0].type}</span></div>
                    </div>

                    <div className="col">
                        <strong>Sequel</strong>
                        <div className="data-wrapper">{details.related.Sequel[0].name} <span className='type'> - {details.related.Sequel[0].type}</span></div>
                    </div>
                </div>
            ) : details.related.Prequel ? (
                <>
                    <strong>Prequel</strong>
                    <div className="data-wrapper">{details.related.Prequel[0].name} <span className='type'> - {details.related.Prequel[0].type}</span></div>
                </>
            ) : details.related.Sequel ? (
                <>
                    <strong>Sequel</strong>
                    <div className="data-wrapper">{details.related.Sequel[0].name} <span className='type'> - {details.related.Sequel[0].type}</span></div>
                </>
            ) : '' }

            {details.related.Other && (
                <>
                    <strong>Other Media</strong>
                    <>
                        {details.related.Other.map((media, i) => (
                            <div className="data-wrapper" key={i}>{media.name} <span className='type'> - {media.type}</span></div>
                        ))}
                    </>
                </>
            )}

            {details.opening_themes.length > 0 && details.ending_themes.length > 0 ? (
                <div className="row">
                    <div className="col">
                        <strong>Opening Themes</strong>
                        <>
                            {details.opening_themes.map((opening, i) => (
                                <div key={i} className="data-wrapper">{opening}</div>
                            ))}
                        </>
                    </div>

                    <div className="col">
                        <strong>Ending Themes</strong>
                        <>
                            {details.ending_themes.map((ending, i) => (
                                <div key={i} className="data-wrapper">{ending}</div>
                            ))}
                        </>
                    </div>
                </div>
            ) : details.opening_themes.length > 0 ? (
                <>
                    <strong>Opening Themes</strong>
                    <>
                        {details.opening_themes.map((opening, i) => (
                            <div key={i} className="data-wrapper">{opening}</div>
                        ))}
                    </>
                </>
            ) : details.ending_themes.length > 0 ? (
                <>
                    <strong>Ending Themes</strong>
                    <>
                        {details.ending_themes.map((ending, i) => (
                            <div key={i} className="data-wrapper">{ending}</div>
                        ))}
                    </>
                </>
            ) : ''}

            {details.producers.length > 0 && (
                <>
                    <strong>Producers</strong>
                    <div className="data-wrapper">{details.producers[0].name}</div>
                </>
            )}

            {details.licensors.length > 0 && (
                <>
                    <strong>Licensors</strong>
                    <div className="data-wrapper">{details.licensors[0].name}</div>
                </>
            )}

            {details.studios.length > 0 && (
                <>
                    <strong>Studios</strong>
                    <div className="data-wrapper">{details.studios[0].name}</div>
                </>
            )}
        </Wrapper>
    )
}

export default DetailsContent
