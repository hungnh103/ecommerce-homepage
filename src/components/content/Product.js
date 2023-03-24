import '../../styles/content/Product.scss'

import StarIcon from '@mui/icons-material/Star';

const truncateText = (text) => {
  if (text.length <= 60) return text
  return text.substr(0, 60) + '...'
}

const MarkSearchTearm = ({ text, term, pid }) => {
  if (!term) return <>{text}</>

  const pattern = new RegExp(term, 'gi')
  const matchedGroups = text.match(pattern)

  const embedded = text.split(pattern).map((nonHightlight, index) =>
    <>
      {nonHightlight}
      <span className='highlight-search-tearm'>
        {matchedGroups && matchedGroups[index]}
      </span>
    </>
  )

  return <>{embedded}</>
}

const Product = ({ product, productNameParam }) => {
  return (
    <div className='product-wrapper'>
      <div className='product-wrapper__thumbnail'>
        <img src={product.image_url} alt={product.name} />
      </div>
      <div className='product-wrapper__category'>{product.category_name}</div>
      <div className='product-wrapper__name'>
        <MarkSearchTearm
          text={product.name}
          term={productNameParam}
          pid={product.id}
        />
      </div>
      <div className='product-wrapper__description'>{truncateText(product.description)}</div>

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
