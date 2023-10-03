import React, { useEffect } from 'react'
import { items } from '../../Helpers/Items' 
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
const ItemListContainer = () => {
  return (
    <div className='list-items'>
    {
      
      items.map((item) => {
        return (
          <Card id={item.id} className="card m-1" style={{ width: '16rem', height:"60vh", marginBlock:"5px", backgroundColor:"#33313d"}}>
          <Card.Img variant="top" src={item.img} style={{maxWidth: "8rem", height:"auto"}}/>
          <Card.Body>
            <Card.Title style={{color:"white"}}><h6>{item.title}</h6></Card.Title>
            <Button as={NavLink} activeClassName to={`/ItemListContainer/${item.id}`} variant="primary">Ver más</Button>
          </Card.Body>
        </Card>
        )
      })
    }
      </div>

  )
}

export default ItemListContainer