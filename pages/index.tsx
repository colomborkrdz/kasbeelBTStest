// @ts-nocheck
import type { NextPage } from 'next'
import { Hero, Seo, EditionsDisplay, Timeline, Footer } from 'components'

const CURATION_CONTRACT: string = "0xbc8db622af59f115cc228dff44d6b17478470ae2"

const Home: NextPage = () => {
  return (
    <>
      <Seo/>
      <EditionsDisplay curationContractAddress={CURATION_CONTRACT} />
      <Timeline />
      <Footer />
    </>
  )
}

export default Home
