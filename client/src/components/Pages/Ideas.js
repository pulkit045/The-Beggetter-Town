import React from 'react'
import Footer from '../Layout/Footer/Footer'
import Header from '../Layout/Header/Header'
import Navbar from '../Layout/Navbar/Navbar'
import Carousel from './Carousel'

const Ideas = () => {
  return (
    <>
        <Header />
        <Navbar />
        <div className="container">
        <div className="col-lg-12 col-md-8 mt-5 mb-5">
        <h3>Ideas</h3>
        <h5>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </h5>
        </div>
      </div>
        <Carousel />
        <Footer />
    </>
  )
}

export default Ideas