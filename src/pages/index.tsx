import type { NextPage } from 'next'
import { Header } from '../components/Header'
import { Suggestion } from '../components/Suggestion'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <div className=" w-[70vw] h-[70vh] my-[9vh] mx-auto border-2 border-zinc-300 rounded-lg">
        <Suggestion />
      </div>
    </>
  )
}

export default Home
