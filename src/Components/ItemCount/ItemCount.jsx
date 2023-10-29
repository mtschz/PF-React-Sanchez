import Button from "react-bootstrap/esm/Button";
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({ stock, inicial, onAdd}) => {
  const [cantidad, setCantidad] = useState(inicial);

  const incremento = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const decremento = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <div className="container m-3">
      <div className="row justify-content-center">
        <div className="col-2">
          <button className="btn btn-primary" onClick={decremento}>
            -
          </button>
        </div>
        <div className="col-2">
          <p className="text-center">{cantidad}</p>
        </div>
        <div className="col-2">
          <button
            className="btn btn-primary"
            onClick={incremento}>+
          </button>
        </div>
          <div className="row justify-content-center">
            <div className="col-3">
            <Link className="btn btn-primary" onClick={()=> onAdd(cantidad)}>Añadir al carrito</Link>
            </div>
          </div>
      </div>
    </div>
  );
};

export default ItemCount;
