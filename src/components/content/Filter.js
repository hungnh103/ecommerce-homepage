import '../../styles/content/Filter.scss'

const Filter = () => {
  return (
    <div className='filter-wrapper'>
      <div className='filter-wrapper__header'>
        Filters
      </div>

      <div className='filter-wrapper__type'>
        Category
      </div>

      <div className='filter-wrapper__type'>
        Brand
      </div>

      <div className='filter-wrapper__type'>
        Price
      </div>

      <div className='filter-wrapper__type'>
        Free Shipping
      </div>

      <div className='filter-wrapper__type'>
        Rating
      </div>
    </div>
  )
}

export default Filter
