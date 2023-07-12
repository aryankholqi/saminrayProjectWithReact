import React, { Fragment, useEffect, useState } from 'react'
import "./Home.css"
import Navbar from '../Navbar/Navbar'
import useHomeQuery from '../../Queries/useHomeQuery'

export default function Home() {
  const [counter, setCounter] = useState(0)
  const productsImages = [
    "./images/products/p1.jpg", "./images/products/p2.png", "./images/products/p3.webp", "./images/products/p4.jpg"
  ]
  
  useEffect(() => {
    const productInterval = setInterval(() => {
      if (counter === productsImages.length - 1) {
        setCounter(0)
      } else {
        setCounter((prevCount) => {
          return prevCount + 1
        })
      }
    }, 5000)
    return () => clearInterval(productInterval)
  }, [counter])

  const posts = useHomeQuery()
  if (posts.isLoading) {
    return <h1 className='text-center'>Loading...</h1>
  }
  if (posts.isError) {
    return <pre>{JSON.stringify(posts.error)}</pre>
  }
  function prevProduct() {
    if (counter === 0) {
      setCounter(3)
    } else {
      setCounter((prevCount) => {
        return prevCount - 1
      })
    }
  }
  function nextProduct() {
    if (counter === posts.data.length - 1) {
      setCounter(0)
    } else {
      setCounter((prevCount) => {
        return prevCount + 1
      })
    }
  }


  return (
    <Fragment>
      {posts.data && (
        <Fragment>
          <Navbar />
          <div className='home-page pt-5 text-center'>
            <div className='slider mt-5'>
              <div className='product'>
                <div className='mx-auto d-flex justify-content-center align-items-center'>
                  <i className="bi bi-caret-left-fill product-left-btn" onClick={prevProduct}></i>
                  <div className='product-img'>
                    <img src={productsImages[counter]} alt="logo" className='product-img-img' />
                  </div>
                  <i className="bi bi-caret-right-fill product-right-btn" onClick={nextProduct}></i>
                </div>
                <h3 className='product-title mt-4 mx-auto'>{posts.data[counter].title}</h3>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  )
}
