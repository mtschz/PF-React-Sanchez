import React, { useContext } from "react";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form"
import Col from "react-bootstrap/esm/Col";
import { useState } from "react";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";

const Checkout = () => {
    const db = getFirestore();
    const[user, setUser] = useState({})
    const[validateEmail, setValidateEmail] = useState('')
    const[orderId, setOrderId] = useState('')
    const [totalPagado, setTotalPagado] = useState()
    const [productsComprados, setProductsComprados] = useState([])
    const {cart, total, clear} = useContext(CartContext)
    const comprobarDatos = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    } 

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!user.name || !user.email || !user.address ) {
          alert("Rellene todos los campos.");
        } else if (user.email !== validateEmail) {
          alert("Los E-mails no coinciden.");
        } else {
            setTotalPagado(total())
            setProductsComprados(cart)
          let order = {
            user,
            items: cart,
            total: total(),
            date: serverTimestamp(),
          };
          const ventas = collection(db, "orders");
          addDoc(ventas, order)
            .then((res) => { console.log(res.id)
                console.log(res)
                setOrderId(res.id)
                clear()
            })
            .catch((error) => console.log(error));
        }
      };

    return (
        <div className="checkoutContainer">
            { orderId !== "" ?
                  <div class="container mt-5" >
                  <h1 style={{color: "#FFFFFF"}}>Su compra fue realizada con éxito.</h1>
                  <h5 style={{color: "#FFFFFF"}} className="mb-3">El Id de su orden es: {orderId}</h5>
                  <h3 style={{color: "#FFFFFF"}}>Detalles de la orden:</h3>
                  <ul class="list-group mb-3">
                    {productsComprados.map((item) => (
                      <li style={{backgroundColor: "#2e333c", color: "#FFFFFF"}} class="list-group-item">
                        <h5>{item.title}</h5>
                        <p>Precio: ${item.precio}</p>
                      </li>
                    ))}
                  </ul>
                  <h4 style={{color: "#FFFFFF"}}>Total: ${totalPagado}</h4>
                </div>
            :         <div class="container mt-5">
            <h2 style={{color: "#FFFFFF"}}>Checkout</h2>
            <p style={{color: "#FFFFFF"}}>Ingrese sus datos para procesar su orden.</p>
            <form id="checkoutForm" onSubmit={handleSubmit}>
                <div class="form-group">
                    <label style={{color: "#FFFFFF"}} for="name">Nombre</label>
                    <input style={{backgroundColor: "#2e333c", color: "#FFFFFF"}} type="text" onChange={comprobarDatos} class="form-control" id="name" name="name" required />
                </div>
                <div class="form-group">
                    <label style={{color: "#FFFFFF"}} for="email">E-mail</label>
                    <input style={{backgroundColor: "#2e333c", color: "#FFFFFF"}} type="email" onChange={comprobarDatos} class="form-control" id="email" name="email" required />
                </div>
                <div class="form-group">
                    <label style={{color: "#FFFFFF"}} for="email">Confirme su E-mail</label>
                    <input style={{backgroundColor: "#2e333c", color: "#FFFFFF"}}type="email" onChange={((e) => setValidateEmail(e.target.value))} class="form-control" required />
                </div>
                <div class="form-group">
                    <label style={{color: "#FFFFFF"}} for="address">Domicilio</label>
                    <input style={{backgroundColor: "#2e333c", color: "#FFFFFF"}} type="text" onChange={comprobarDatos} class="form-control" id="address" name="address" required />
                </div>
                <button type="submit" class="btn btn-primary mt-3">Enviar</button>
            </form>
        </div>
            }
        </div>
        
    )
}

export default Checkout