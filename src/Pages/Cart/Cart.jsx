import React from "react"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const Cart = () => {
const {cart, clear, total, removeItem} = useContext(CartContext)

return (
    <>
        {cart.length > 0
        ?     <div className="container mt-4">
        <h1 style={{color: "whitesmoke"}}>Carrito de Compras</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Subtotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
                      <tr key={item.id}>
                      <td>{item.title}</td>
                      <td>${item.precio}</td>
                      <td>{item.quantityAdded}</td>
                      <td>${item.precio * item.quantityAdded}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => removeItem(item.id)}
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
            ))}
          </tbody>
        </table>
        <div className="text-right">
          <h4>Total: ${total()}</h4>
        </div>
        <div>
          <Link to="/Checkout" className="btn btn-success">
              Terminar la compra
            </Link>
        </div>
      </div>
        : <div>
            <p>Tu carrito está vacío</p>
            <Link to="/" className="btn btn-dark">Regresar a la tienda</Link>
        </div>
    }
    </>
)
}
export default Cart