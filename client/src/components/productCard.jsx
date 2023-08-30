const productCard = (props) => { //props.product is our prodcut data
    const product = props.product

  return (
    <div>
        <div>
            <h1>{product.name}</h1>
            <p>{product.price}</p>
            <p>{product.category}</p>
            <button>Add To Cart</button>
        </div>
    </div>
  )
}
export default productCard