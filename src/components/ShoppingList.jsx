import { useState } from "react" // los hooks se deben importar

import AddForm from "./AddForm"
import Item from "./Item"
import Search from "./Search"

const testInitialList = [
  { name: "Tablet", price: 200 },
  { name: "Juego de Mesa", price: 40 },
  { name: "Conga", price: 120 }
]

function ShoppingList() {

  const [caja, setCaja] = useState(testInitialList)

  const añadirProducto = (product) => {
    console.log("añadiendo producto desde shoppingList", product)

    // ... acá es que vamos a añadir el producto al estado
    const copy = [...caja]
    copy.push(product)
    setCaja(copy)
  }

  return (
    <div>
      
      <h3>Lista de compra</h3>

      <hr />

      <AddForm 
        addProduct={añadirProducto}
        setCaja={setCaja}
      />

      <hr />

      <Search />

      <hr />

      {/* varias veces */}

      {caja.map((eachProduct, index) => {
        return (
          <Item 
            key={eachProduct.name + index} 
            eachItem={eachProduct}
          />
        )
      })}

    </div>
  )
}

export default ShoppingList