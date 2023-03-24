import '../../styles/content/ProductsList.scss'

import Product from './Product'

const ProductsList = ({ productNameParam, products }) => {
  return (
    <div className='products-wrapper'>
      {products.map(product =>
        <Product
          key={product.id}
          product={product}
          productNameParam={productNameParam}
        />
      )}
    </div>
  )
}

export default ProductsList
