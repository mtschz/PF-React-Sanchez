import React from 'react';
import { useParams } from 'react-router-dom';
import { getItemsByCategory } from '../../Helpers/Items';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

const Category = () => {
  const { itemCategory } = useParams();
  const products = getItemsByCategory(itemCategory);

  return (
    <div className='list-category'>
      <h2 style={{color:"white"}}>Productos en la categoría: {itemCategory}</h2>
      <div className="product-list">
        {products.map((product) => (
          <Card key={product.id} className="card" style={{ width: '16rem', height: '60vh', marginBlock: '5px', backgroundColor: '#33313d' }}>
            <Card.Img variant="top" src={product.img} style={{ maxWidth: '8rem', height: 'auto' }} />
            <Card.Body>
              <Card.Title style={{ color: 'white' }}><h6>{product.title}</h6></Card.Title>
              <Button as={NavLink} activeClassName to={`/ItemListContainer/${product.id}`} variant="primary">
                Ver más
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Category;
