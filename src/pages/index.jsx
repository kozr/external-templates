import Head from 'next/head'
import React from 'react'
// import fireDb from '@utilities/firebase'
import { SectionContainer } from '@lib/Containers'
import NavBar from '@components/Navbar'
// import Stats from '@components/Stats'
import Footer from "@components/Footer"
import Info from 'src/sections/Info';
import Register from 'src/sections/Register';
import GlobalStyle from "../theme/GlobalStyle";
import Faq from '../sections/Faq'

export default function Index({ title }) {
  return (
    <SectionContainer>
      <GlobalStyle />
      {/* <div>
        <Header1>Large Title</Header1>
        <Header2>Title 1</Header2>
        <Header3>Title 2</Header3>
        <Body>Some long lorem ipsum body text that will probably never see the light of day but that is a-ok.</Body>
      </div> */}
      <Head>
        {/* Remove comment once title is set */}
        <title> {title} </title>
        {/* Remove comment once favicon is set */}
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Remove comment once description is written */}
        <meta
          name="description"
          content=""
        />
        {/* Remove comment once preview image is set */}
        <meta property="og:image" content="/preview.png" />
      </Head>

      {/* Components Starts */}
      <NavBar />
      <Register />
      <Info />
      <Faq />
      <Footer />

      {/* Components Ends */}
    </SectionContainer >
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: "nwHacks 2022"
    }, // will be passed to the page component as props
  }
}
