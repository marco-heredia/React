import { Link } from "react-router-dom"
import { Button } from "../Button/Button"

export const Item = ({nombre, imagen, detalle, id}) => {
  return (
    <div className="border border-3 p-3 d-flex flex-column m-2">
      <p>Nombre: {nombre}</p>
      <img src={imagen} alt="foto" />
      <p className="card-text">{detalle}</p>
      <Link to={`/item/${id}`}>
      <Button text="Detalles"/>
      </Link>
      

    </div>
  )
}
