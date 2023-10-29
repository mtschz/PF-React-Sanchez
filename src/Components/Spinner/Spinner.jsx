import Spinner from 'react-bootstrap/Spinner';

function Spinner() {
  return (
    <Spinner animation="border" role="status" variant="light">
        <h3>Cargando...</h3>
    </Spinner>
  );
}

export default Spinner;