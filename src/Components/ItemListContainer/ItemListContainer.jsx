import "./ItemListContainer.css"

const ItemListContainer = ({name, isRed}) => {
  return (
    <div>
        <h1 className={ isRed ? "red" : "blue" }> {name} </h1>
    </div>
  )
}

export default ItemListContainer