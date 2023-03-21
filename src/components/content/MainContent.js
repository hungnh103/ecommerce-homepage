import '../../styles/content/MainContent.scss'

import ProductsList from './ProductsList'
import ReactPaginate from 'react-paginate'

const MainContent = ({
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
          onClick={sortItems}
          className='main-content-wrapper__header__sort'
        >
          <option value='id_desc' selected={sortCriteria === 'id_desc'}>Sort by newest</option>
          <option value='price_asc' selected={sortCriteria === 'price_asc'}>Price ascending</option>
          <option value='price_desc' selected={sortCriteria === 'price_desc'}>Price descending</option>
        </select>

        <select
          onClick={selectPerPage}
          className='main-content-wrapper__header__perpage'
        >
          <option value='2' selected={perPage === '2'}>2 hits per page</option>
          <option value='4' selected={perPage === '4'}>4 hits per page</option>
          <option value='6' selected={perPage === '6'}>6 hits per page</option>
        </select>
      </div>

      <div>
        {products.length > 0 ? (
          <>
            <span>Total items: {totalProductsFound}</span>
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
