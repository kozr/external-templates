import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import fireDb from '@utilities/firebase';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 40vw;
  
  ${(p) => p.theme.mediaQueries.mobile} {
    padding-top: 2rem;
    min-height: 100vh;
  }
`

const Grid = styled.div`
  min-width: 800px;
  max-width: 1200px;
  width: 65vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  padding-top: 3rem;
  gap: 2rem;
  
  
  ${(p) => p.theme.mediaQueries.mobile} {
    display: flex;
    flex-direction: column;
    min-width: 0;
    width: calc(100% -2rem);
  }
`

const SponsorImg = styled.img`
  height: 100%;
  width: 100%;
  border: none;
  object-fit: cover;

  ${(p) => p.theme.mediaQueries.mobile} {
    
  }
`

const SponsorContainer = () => {
  const [sponsors, setSponsors] = useState([])

  useEffect(async () => {
    const data = await fireDb.getCollection('nwHacks2022', 'Sponsors')
    if (data) {
      setSponsors(data)
    }
  }, [])

  const Sponsor = ({ link, url }) => (
    <a href={link} target="_blank" rel="noreferrer" style={{
      width: '100%',
      aspectRatio: '1/1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <SponsorImg src={url} />
    </a>
  )

  return (
    <Container id="sponsors">
      <Grid>
        {sponsors && sponsors.map(item => (
          <Sponsor {...{
            key: item.name,
            link: item.link,
            url: item.imgURL
          }} />
        ))}
      </Grid>
    </Container>
  )
}

export default SponsorContainer