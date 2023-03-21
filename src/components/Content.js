import '../styles/Content.scss'

import Filter from './content/Filter'
import MainContent from './content/MainContent'

const Content = ({ products, pageCount, handlePageChange }) => {
  return (
    <div className='content-wrapper'>
      <div className='content-wrapper__body'>
        <Filter />
        <MainContent
          products={products}
          pageCount={pageCount}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  )
}

export default Content
