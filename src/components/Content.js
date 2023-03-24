import '../styles/Content.scss'

import Filter from './content/Filter'
import MainContent from './content/MainContent'

const Content = ({
  productNameParam,
  sortCriteria,
  perPage,
  selectedBrands,
  selectedPriceRange,
  isFreeship,
  totalProductsFound,
  categories,
  brands,
  products,
  pageCount,
  sortItems,
  selectPerPage,
  currentPage,
  selectedCategory,
  currentRating,
  handlePageChange,
  handleSelectCategory,
  handleSelectBrand,
  handlePriceChange,
  toggleFreeship,
  handleSelectRating,
  clearAllFilters
}) => {
  return (
    <div className='content-wrapper'>
      <div className='content-wrapper__body'>
        <Filter
          categories={categories}
          brands={brands}
          selectedCategory={selectedCategory}
          selectedBrands={selectedBrands}
          selectedPriceRange={selectedPriceRange}
          isFreeship={isFreeship}
          currentRating={currentRating}
          handleSelectCategory={handleSelectCategory}
          handleSelectBrand={handleSelectBrand}
          handlePriceChange={handlePriceChange}
          toggleFreeship={toggleFreeship}
          handleSelectRating={handleSelectRating}
          clearAllFilters={clearAllFilters}
        />
        <MainContent
          productNameParam={productNameParam}
          sortCriteria={sortCriteria}
          perPage={perPage}
          totalProductsFound={totalProductsFound}
          products={products}
          pageCount={pageCount}
          sortItems={sortItems}
          selectPerPage={selectPerPage}
          handlePageChange={handlePageChange}
          currentPage={currentPage}
        />
      </div>
    </div>
  )
}

export default Content
