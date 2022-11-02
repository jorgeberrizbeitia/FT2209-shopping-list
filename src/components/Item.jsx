import Card from 'react-bootstrap/Card';

// function Item({ eachItem: {name, price} }) {
function Item(props) {

  // const { eachItem } = props
  // const { name, price } = eachItem

  const { name, price } = props.eachItem

  // console.log(props)

  return (
    <Card>

      <Card.Header>{name}</Card.Header>
      <Card.Body>
        <Card.Text>Price: {price}$</Card.Text>
      </Card.Body>

    </Card>
  )
}

export default Item