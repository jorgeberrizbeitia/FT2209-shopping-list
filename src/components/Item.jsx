

// function Item({ eachItem: {name, price} }) {
function Item(props) {

  // const { eachItem } = props
  // const { name, price } = eachItem

  const { name, price } = props.eachItem

  // console.log(props)

  return (
    <div>

      <h5>{name}</h5>
      <p>Price: {price}$</p>

    </div>
  )
}

export default Item