import '../../styles/content/Product.scss'

import StarIcon from '@mui/icons-material/Star';

const Product = ({ product }) => {
  return (
    <div className='product-wrapper'>
      <div className='product-wrapper__thumbnail'>
        <img src={product.image_url} alt={product.name} />
      </div>
      <div className='product-wrapper__category'>{product.category_name}</div>
      <div className='product-wrapper__name'>{product.name}</div>
      <div className='product-wrapper__description'>{product.description}</div>

      <div className='product-wrapper__extra-info'>
        <div className='product-wrapper__extra-info__price'><span>$</span> {product.price}</div>
        <div className='product-wrapper__extra-info__rating'>
          <StarIcon className='star-icon' /> {product.avg_rating}
        </div>
      </div>
    </div>
  )
}

export default Product