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

  return (
    <div>
      
      <h3>Lista de compra</h3>

      <AddForm />

      <Search />


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