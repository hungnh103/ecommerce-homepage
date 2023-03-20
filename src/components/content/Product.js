import '../../styles/content/Product.scss'

const Product = ({ product }) => {
  return (
    <div className='product-wrapper'>
      <div className='product-wrapper__thumbnail'>
        <img src={product.image_url} alt={product.name} />
      </div>
      <div className='product-wrapper__category'>{product.id} / {product.category_name}</div>
      <div className='product-wrapper__name'>{product.name}</div>
      <div className='product-wrapper__description'>{product.description}</div>

      <div>
        <div className='product-wrapper__price'><span>$</span> {product.price}</div>
        <div className='product-wrapper__rating'>{product.avg_rating}</div>
      </div>
    </div>
  )
}

export default Product
