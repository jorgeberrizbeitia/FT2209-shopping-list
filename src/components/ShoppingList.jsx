import { useState } from "react" // los hooks se deben importar

import AddForm from "./AddForm"
import Item from "./Item"
import Search from "./Search"

import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

const testInitialList = [
  { name: "Tablet", price: 200 },
  { name: "Juego de Mesa", price: 40 },
  { name: "Conga", price: 120 }
]

function ShoppingList() {

  const [caja, setCaja] = useState(testInitialList) // donde está toda la informacion
  const [cajaAMostrar, setCajaAMostrar] = useState(testInitialList) // un estado donde la está la informacion que se visualiza
  const [ formIsShowing, setFormIsShowing ] = useState(false)

  const añadirProducto = (product) => {
    console.log("añadiendo producto desde shoppingList", product)

    // ... acá es que vamos a añadir el producto al estado
    const copy = [...caja]
    copy.push(product)
    setCaja(copy)

    // esto es para que el filtro funcione bien al agregar
    const copy2 = [...cajaAMostrar]
    copy2.push(product)
    setCajaAMostrar(copy2)
  }

  const toggleForm = () => {
    console.log("cambiando si se ve o no el formulario")
    if (formIsShowing === true) {
      setFormIsShowing(false)
    } else {
      setFormIsShowing(true)
    }

    // opcion de syntaxis avanzado
    // setFormIsShowing(!formIsShowing)
    // setFormIsShowing(formIsShowing === true ? false : true)
  }

  const filterCaja = (filterQuery) => {
    console.log(filterQuery)

    // filterQuery = "T"

    // ... aqui haremos el filtro, Tenemos caja y tenemos filterQuery
    const filteredArr = caja.filter((eachProduct) => {
      // debemos retornar true o false
      return eachProduct.name.startsWith(filterQuery)
      // prueben con includes, y prueben con toLowerCase o toUpperCase. O con regex.
    })

    console.log(filteredArr)
    setCajaAMostrar(filteredArr)
  }

  return (
    <div>
      
      <h3>Lista de compra</h3>

      <hr />

      <Button variant="outline-info" onClick={toggleForm}>Abrir el Form</Button>

      {/* {formIsShowing === true 
      ? <AddForm 
        addProduct={añadirProducto}
        setCaja={setCaja}
      /> 
      : null
      } */}

      {/* {formIsShowing === true && <AddForm 
        addProduct={añadirProducto}
        setCaja={setCaja}
      />} */}

      <Collapse in={formIsShowing}>
        
        <div>
          <AddForm 
            addProduct={añadirProducto}
            setCaja={setCaja}
          />
        </div>
      
      </Collapse>

      <hr />

      <Search filterCaja={filterCaja}/>

      <hr />

      {/* varias veces */}

      {cajaAMostrar.map((eachProduct, index) => {
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