import React, {useEffect, useState} from 'react'
import Banner from './Banner'
import CatalogNav from './CatalogNav'
import Products from './Products'
import axios from 'axios'

const Catalog = () => {

  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState('')
  const [searched, setSearched] = useState(false)

  async function getData(queryVal) {
    if(queryVal === '') return
    const options = {
      method: 'GET',
      url: 'https://real-time-amazon-data.p.rapidapi.com/search',
      params: {query: queryVal, country: 'US', category_id: 'aps', page: '1'},
      headers: {
        'X-RapidAPI-Key': 'd18ec56039mshacc40450ffc158bp16040fjsn9d142a66a806',
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
      <CatalogNav searchText={searchText} setSearchText={setSearchText} getData={getData} setSearched={setSearched}/>
      {
        !searched ?
        <Banner /> :
        <Products products={products} />
      }
    </div>
  )
}

export default Catalog