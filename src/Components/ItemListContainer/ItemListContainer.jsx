import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { NavLink, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
const ItemListContainer = () => {
  const db = getFirestore();
  const itemsCollection = collection(db, "Items");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true)

  const { itemCategory } = useParams()

  useEffect(() => {
    setLoading(true)

    const collectionRef = itemCategory
    ? query(collection(db, "Items"), where("category", "==", itemCategory))
    : collection(db, "Items")

    getDocs(collectionRef)
    .then(res => {
      const productsAdapted = res.docs.map(doc => {
        const data = doc.data()
        return {id: doc.id, ...data}
      })
      setItems(productsAdapted)
    })
    .catch (error => {
      console.log(error)
    })
    .finally(() => {
      setLoading(false)
    })
    });
    return (
      <div className='list-items'>
        {items.map((item) => {
          return (
            <Card id={item.id} className="card m-1" style={{ width: '16rem', height: "60vh", marginBlock: "5px", backgroundColor: "#33313d" }}>
              <Card.Img variant="top" src={item.img} style={{ maxWidth: "8rem", height: "auto" }} />
              <Card.Body>
                <Card.Title style={{ color: "white" }}><h6>{item.title}</h6></Card.Title>
                <Button as={NavLink} activeClassName to={`/ItemListContainer/${item.id}`} variant="primary">Ver más</Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    );
  
  };

export default ItemListContainer;

