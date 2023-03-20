import '../../styles/content/MainContent.scss'

import ProductsList from './ProductsList'

const MainContent = ({ products }) => {
  return (
    <div className='main-content-wrapper'>
      <div>Header</div>
      <ProductsList products={products} />
    </div>
  )
}

export default MainContent
