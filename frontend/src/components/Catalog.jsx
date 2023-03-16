import React, {useState} from 'react'
import Banner from './Banner'
import CatalogNav from './CatalogNav'
import Products from './Products'

const Catalog = () => {
  const [searchText, setSearchText] = useState('')
  const [searched, setSearched] = useState(false)
  return (
    <div>
      <CatalogNav searchText={searchText} setSearchText={setSearchText}/>
      {
        !searched ?
        <Banner /> :
        <Products />
      }
    </div>
  )
}

export default Catalog