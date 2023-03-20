import '../../styles/content/ProductsList.scss'

import Product from './Product'

const ProductsList = ({ products }) => {
  return (
    <div className='products-wrapper'>
      {products.map(product => <Product key={product.id} product={product} />)}
    </div>
  )
}

export default ProductsList
