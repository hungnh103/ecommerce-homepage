import '../../styles/content/MainContent.scss'

import ProductsList from './ProductsList'
import ReactPaginate from 'react-paginate'

const MainContent = ({
  productNameParam,
  sortCriteria,
  perPage,
  totalProductsFound,
  products,
  pageCount,
  sortItems,
  selectPerPage,
  handlePageChange,
  currentPage
}) => {
  return (
    <div className='main-content-wrapper'>
      <div className='main-content-wrapper__header'>
        <select
          onChange={sortItems}
          className='main-content-wrapper__header__sort'
          value={sortCriteria}
        >
          <option value='id_desc'>Sort by newest</option>
          <option value='price_asc'>Price ascending</option>
          <option value='price_desc'>Price descending</option>
        </select>

        <select
          onChange={selectPerPage}
          className='main-content-wrapper__header__perpage'
          value={perPage}
        >
          <option value='16'>16 hits per page</option>
          <option value='32'>32 hits per page</option>
          <option value='64'>64 hits per page</option>
        </select>
      </div>

      <div>
        {products.length > 0 ? (
          <>
            <span>Total items: {totalProductsFound}</span>
            <ProductsList
              productNameParam={productNameParam}
              products={products}
            />

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
                forcePage={currentPage - 1}
              />
            </div>
          </>
        ) : (
          <>
            No data found
          </>
        )}
      </div>
    </div>
  )
}

export default MainContent
