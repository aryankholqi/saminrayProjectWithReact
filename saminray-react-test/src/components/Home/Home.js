import React, { Fragment, useEffect, useRef, useState } from 'react'
import "./Home.css"
import Navbar from '../Navbar/Navbar'
import { useSelector } from "react-redux"
import axios from 'axios'

export default function Home() {
  const username = useSelector(state => state.userName)
  const [loaded, setLoaded] = useState(false)
  const [counter, setCounter] = useState(0)
  const [productsImages, setProductsImages] = useState([
    "./images/products/p1.jpg", "./images/products/p2.png", "./images/products/p3.webp", "./images/products/p4.jpg"
  ])
  const [posts, setPosts] = useState()
  useEffect(() => {
    axios({
      url: "https://jsonplaceholder.typicode.com/posts",
      method: "GET",
    }).then(res => {
      setPosts(res.data.slice(0, 4))
      setLoaded(true)
    }).catch(err => {
      console.log(err.message)
    })
  }, [])
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
    if (counter === posts.length - 1) {
      setCounter(0)
    } else {
      setCounter((prevCount) => {
        return prevCount + 1
      })
    }
  }
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
    return ()=>clearInterval(productInterval)
  }, [counter])

  return (
    <Fragment>
      {loaded && (
        <Fragment>
          <Navbar />
          <div className='home-page pt-5 text-center'>
            <h2 className='home-page-title'>Welcome <span>{username}</span></h2>
            <div className='slider mt-5'>
              <div className='product'>
                <div className='mx-auto d-flex align-items-center justify-content-center'>
                  <i className="bi bi-caret-left-fill product-left-btn" onClick={prevProduct}></i>
                  <div className='product-img'>
                    <img src={productsImages[counter]} alt="logo" className='product-img-img' />
                  </div>
                  <i className="bi bi-caret-right-fill product-right-btn" onClick={nextProduct}></i>
                </div>
                <h3 className='product-title mt-4 text-white mx-auto'>{posts[counter].title}</h3>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  )
}
