import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { DetailsWrapper, Grid } from './styles'
import DetailsTopContent from './DetailsTopContent'
import Aside from './Aside'
import DetailsContent from './DetailsContent'
import BackButton from './BackButton'

// ? dummydata
// import { animeDetails } from '../dummydata'

const Details = ({ match }) => {
    const [details, setDetails] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const fetchAnimeDetails = async () => {
        const { data } = await axios(`https://api.jikan.moe/v3/anime/${match.params.id}`)

        setDetails(data)
        setIsLoading(false)
    }

    useEffect(() => {
        fetchAnimeDetails()
      
    }, [])

    return (
        <DetailsWrapper>
            <div className="container">
                {isLoading ? <h2 style={{textAlign: 'center'}}>Loading...</h2> : (
                    <BackButton>
                        <div className="content">
                            <DetailsTopContent details={details} />

                            <Grid>
                                <Aside details={details} />
                                <DetailsContent details={details} />
                            </Grid>
                        </div>  
                    </BackButton>
                )}
            </div>
        </DetailsWrapper>
    )
}

export default Details
