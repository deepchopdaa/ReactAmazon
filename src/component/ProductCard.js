import Card from 'react-bootstrap/Card';

function Productcard(props) {
  return (
    <Card style={{ width: '14rem' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.data.title}</Card.Title>
        <Card.Text>
          {props.data.description}
          <br></br>
          {props.data.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Productcard;