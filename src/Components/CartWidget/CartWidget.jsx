import { CartContext } from '../../context/CartContext'
import cart from './assets/carro.png'
import Badge from 'react-bootstrap/Badge';

import React, { useContext } from 'react'

export const CartWidget = () => {
  const {cartQuantity} = useContext(CartContext)
  return (
    <div className="cartWidget">
        <img src={cart} alt="car-widget"/>
        <Badge bg="light" text="dark">{cartQuantity() > 0 && cartQuantity()}</Badge>
    </div>
  )
}

export default CartWidget