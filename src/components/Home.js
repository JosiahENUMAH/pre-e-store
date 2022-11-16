import React from 'react'
import Products from './Products'

const Home = () => {
  return (
    <div className='hero'>
        <div className ="card bg-success text-success border-1">
            <img src="/assets/unsplash.jpg" className ="card-img" alt="background"
            height='900px' />
            <div className ="card-img-overlay d-flex flex-column justify-content-center">
                <div className='container'>
                <h6 className ="card-title display-3 fw-bolder mb-0" >NEW ARRIVALS</h6>
                <p className ="card-text lead fs-2">CHECK ALL THE TRENDS
                </p>    
                </div>
            </div>
        </div>
    <Products />

    </div>
  )
}

export default Home