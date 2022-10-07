import React from 'react'
import Header from '../Layout/Header/Header'
import Carousel from './Carousel';
import Footer from '../Layout/Footer/Footer';
import '../../App.css';
import Navbar from '../Layout/Navbar/Navbar';
const Home = () => {
  return (
    <> 
    <Header/>
    {/* <div className='App'>
    <Tabs />
    </div> */}
    <Navbar />
    <Carousel />
    <Footer />
    </>
   
  )
}

export default Home