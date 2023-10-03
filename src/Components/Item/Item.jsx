import React from 'react'
import { useParams } from 'react-router-dom'
import { getItemById } from '../../Helpers/Items'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardText from 'react-bootstrap/esm/CardText';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image';
import ItemCount from '../ItemCount/ItemCount'

const Item = () => {
    const { itemId } = useParams()
    const product = getItemById(itemId)
    return (
<div className="product-detail">
      <Row>
        <Col md={6}>
          <Image src={product.img} alt={product.title} fluid />
        </Col>
        <Col md={6}>
          <h2 style={{color:"white"}}>{product.title}</h2>
          <p>{product.descripcion}</p>
          <p className="product-price">${product.precio}</p>
          <ItemCount inicial={1} stock={product.stock} />
          <Button variant="primary">Añadir al carrito</Button>
        </Col>
      </Row>
    </div>
    )
}

export default Item