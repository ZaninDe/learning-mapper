import type { NextPage } from 'next'
import Form from '../components/Form'
import { Header } from '../components/Header'
import { Suggestion } from '../components/Suggestion'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <div className=" w-[70vw] h-[70vh] my-[9vh] mx-auto border-8 border-zinc-800 rounded-xl">
        <Suggestion />
        <Form />
      </div>
    </>
  )
}

export default Home
