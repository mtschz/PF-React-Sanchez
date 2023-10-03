import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { items } from '../../Helpers/Items' 
import ItemListContainer from '../../Components/ItemListContainer/ItemListContainer'

const Home = () => {
  return (
    <div>
        <ItemListContainer />
    </div>
  )
}

export default Home