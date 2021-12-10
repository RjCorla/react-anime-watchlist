import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import SearchBar from './SearchBar'
import ResultCard from './ResultCard'

// ! dummtdata
// import { results } from '../dummydata'


const AddAnime = () => {
    const [results, setResults] = useState([])
    const [query, setQuery] = useState('')

    const handleChange = async e => {
        

        if (query.length >= 3) fetchFoundAnime()

        setQuery(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        
        fetchFoundAnime()

        setQuery('')
    }

    const fetchFoundAnime = async () => {
        try {
            let { data } = await axios(`https://api.jikan.moe/v3/search/anime?q=${query}`)
            
            setResults(data.results)
        } catch (err) {
            console.error(err.message)
        }
    }


    return (
        <AddAnimeWrapper>
            <div className="container">
                <div className="content">
                    <SearchBar query={query} handleChange={handleChange} handleSubmit={handleSubmit} />

                    {results.length > 0 && (
                        <main>
                            {results.map(result => (
                                <ResultCard result={result} key={result.mal_id} />
                            ))}
                        </main>
                    )}
                </div>
            </div>
        </AddAnimeWrapper>
    )
}

export default AddAnime

// ? styled

const AddAnimeWrapper = styled.section`
  padding: 2.5rem 0;
  color: ${(props) => props.theme.textSecondary};

  .content {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
  }
`;

