import cart from './assets/carro.png'

import React from 'react'

export const CartWidget = () => {
  return (
    <div className="cartWidget">
        <img src={cart} alt="car-widget"/>
        0
    </div>
  )
}

export default CartWidget