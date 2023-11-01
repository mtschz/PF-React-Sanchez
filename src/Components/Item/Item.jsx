import React from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image';
import ItemCount from '../ItemCount/ItemCount'
import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { getDoc, getFirestore, doc } from "firebase/firestore";
import { useEffect } from 'react';
import Spinner from 'react-bootstrap/esm/Spinner';
import { Link } from 'react-router-dom';

const Item = () => {
  const db = getFirestore();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    const docRef = doc(db, 'Items', itemId);

    getDoc(docRef)
      .then((res) => {
        const data = res.data();
        console.log(data)
        const productAdapted = { id: res.id, ...data };
        console.log(productAdapted)
        setItem(productAdapted);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [itemId]);

    const [quantityAdded, setQuantityAdded] = useState(0)
    const {cart} = useContext(CartContext)

    const {addItem} = useContext(CartContext)

    const handleOnAdd = (quantity) => {
      setQuantityAdded(quantity);
      addItem(item, quantity);
    };
    console.log(item);
    return (
      item == undefined 
      ? <div className='containerLoading'      
        style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}>
        <Spinner />
      </div>
      : <div className="product-detail">
          <Row>
            <Col md={6}>
              <Image src={item.img} alt={item.title} fluid />
            </Col>
            <Col md={6}>
              <h2 style={{color:"white"}}>{item.title}</h2>
              <p>{item.descripcion}</p>
              <p className="product-price">${item.precio}</p>
            </Col>
            <div>
              {
                quantityAdded > 0 ? (
                      <Link to={`/Cart`} className='btn btn-primary m-2' variant="primary">Ir al carrito</Link>
                ) : (
                  <ItemCount inicial={1} stock={item.stock} onAdd={handleOnAdd} />
                )
              }
            </div>
          </Row>
        </div>
    )
}

export default Item