import React, {useEffect, useState} from 'react'
import Banner from './Banner'
import CatalogNav from './CatalogNav'
import Products from './Products'
import axios from 'axios'
import Cart from './Cart'

const Catalog = () => {

  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState('')
  const [searched, setSearched] = useState(false)
  const [wishlist, setWishlist] = useState([])
  const [cart, showCart] = useState(false)

  useEffect(() => {
    console.log(wishlist);
  }, [wishlist])

  async function getData(queryVal) {
    if(queryVal === '') return

    const options = {
      method: 'GET',
      url: 'https://real-time-amazon-data.p.rapidapi.com/search',
      params: {query: queryVal, country: 'US', category_id: 'aps', page: '1'},
      headers: {
        'X-RapidAPI-Key': '59e141312amsh948cdf69fea542ep1ba074jsna9bcde4470ad',
        'X-RapidAPI-Host': 'real-time-amazon-data.p.rapidapi.com'
      }
    };
    
    const response = await axios.request(options).catch((err) => {
      console.log("Error: ", err)
    })
    setProducts(response.data.data.products)
    setSearched(true)
  }

  useEffect(() => {
    console.log(products)
  }, [products])

  return (
    <div>
      <CatalogNav searchText={searchText} setSearchText={setSearchText} getData={getData} setSearched={setSearched} searched={searched} wishlist={wishlist} showCart={showCart} cart={cart}/>
      {cart && <Cart wishlist={wishlist} setWishlist={setWishlist}/>}
      {
        !searched ?
        <div>
          <Banner getData={getData} setSearchText={setSearchText}/>
          <Products products={products} wishlist={wishlist} setWishlist={setWishlist}/>
        </div> :
        <Products products={products} wishlist={wishlist} setWishlist={setWishlist}/>
      }
    </div>
  )
}

export default Catalog