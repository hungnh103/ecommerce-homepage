import '../../styles/content/MainContent.scss'

import ProductsList from './ProductsList'
import ReactPaginate from 'react-paginate'

const MainContent = ({ products, pageCount, handlePageChange }) => {
  return (
    <div className='main-content-wrapper'>
      <div>Header</div>
      <ProductsList products={products} />

      <div className='main-content-wrapper__pagination'>
        <ReactPaginate
          previousLabel="Previous"
          nextLabel="Next"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          pageCount={pageCount}
          marginPagesDisplayed={3}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          containerClassName="pagination"
          activeClassName="active"
        />
      </div>
    </div>
  )
}

export default MainContent
