import { useState } from "react";

const ItemCount = ({ stock, inicial }) => {
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
    <div className="container">
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
      </div>
    </div>
  );
};

export default ItemCount;
