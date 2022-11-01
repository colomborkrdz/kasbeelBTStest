// @ts-nocheck
import type { NextPage } from 'next'
import { Hero, Seo, EditionsDisplay, Timeline, Footer } from 'components'


const Home: NextPage = () => {
  return (
    <>
      <Seo/>
      <EditionsDisplay />
      <Timeline />
      <Footer />
    </>
  )
}

export default Home
