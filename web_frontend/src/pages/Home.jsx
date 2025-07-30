import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Header from "../components/Header/Header";

const Home = () => {
  return (
    <div className='home' id='home'>
      <Navbar/>
      <Header/>
      <Menu category={category} setCategory={setCategory}/>
      <DisplayCake category={category}/>
      <AppDownload />
    </div>
  )
}

export default Home
