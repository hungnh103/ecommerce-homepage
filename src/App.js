import { useState, useEffect } from 'react'
import axios from 'axios'

import './App.scss';

import Header from './components/Header'
import Content from './components/Content'

const baseUrl = process.env.REACT_APP_PUBLIC_API_ENDPOINT

function App() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [brands, setBrands] = useState([])

  const [totalItems, setTotalItems] = useState(0)
  const [sortCriteria, setSortCriteria] = useState('id_desc')
  const [perPage, setPerPage] = useState('16')
  const [pageCount, setPageCount] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)

  const [productNameParam, setProductNameParam] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedBrands, setSelectedBrands] = useState([])
  const [selectedPriceRange, setSelectedPriceRange] = useState(null)
  const [isFreeship, setIsFreeship] = useState(false)
  const [selectedRating, setSelectedRating] = useState(null)

  useEffect(() => {
    fetchProjectsData()
  }, [
    productNameParam,
    sortCriteria,
    perPage,
    currentPage,
    selectedCategory,
    selectedBrands,
    selectedPriceRange,
    isFreeship,
    selectedRating
  ])

  useEffect(() => {
    fetchFilterData()
  }, [])

  const fetchProjectsData = async () => {
    const [field, order] = sortCriteria.split('_')
    let sortQuery = ''
    if (field === 'id') {
      sortQuery = '_sort=id&_order=desc'
    } else {
      sortQuery = `_sort=price,id&_order=${order},desc`
    }

    const brandQuery = selectedBrands.map(brand => `brand_id=${brand}`).join('&')

    let priceQuery = ''
    if (selectedPriceRange) {
      priceQuery = `price_gte=${selectedPriceRange[0]}&price_lte=${selectedPriceRange[1]}`
    }

    let freeshipQuery = ''
    if (isFreeship) {
      freeshipQuery = `free_ship=true`
    }

    let ratingQuery = ''
    if (selectedRating) {
      ratingQuery = `avg_rating=${selectedRating}`
    }

    const url = `${baseUrl}/products?&${freeshipQuery}&${ratingQuery}&${brandQuery}&${priceQuery}&category_ids_like=${selectedCategory}&name_like=${productNameParam}&${sortQuery}&_page=${currentPage}&_limit=${perPage}`

    try {
      const response = await axios.get(url)
      const data = await response.data
      const totalCount = await Number(response.headers.get('x-total-count'))
      const numberOfPages = await Math.ceil(totalCount / perPage)

      setProducts(data)
      setTotalItems(totalCount)
      setPageCount(numberOfPages)
    } catch(error) {
      console.log(error)
    }
  }

  const fetchFilterData = async () => {
    const categoriesURL = `${baseUrl}/categories`
    const brandsURL = `${baseUrl}/brands`

    try {
      const categoriesResponse = await axios.get(categoriesURL)
      const categoriesData =  await categoriesResponse.data

      const brandsResponse = await axios.get(brandsURL)
      const brandsData = await brandsResponse.data

      setCategories(categoriesData)
      setBrands(brandsData)
    } catch(error) {
      console.log(error)
    }
  }

  const sortItems = (e) => {
    setSortCriteria(e.target.value)
    setCurrentPage(1)
  }

  const selectPerPage = (e) => {
    setPerPage(e.target.value)
    setCurrentPage(1)
  }

  const handlePageChange = (e) => {
    setCurrentPage(e.selected + 1)
  }

  const handleSelectCategory = (e) => {
    const targetCategory = `,${e.target.dataset.cid},`
    document.querySelectorAll('.filter-wrapper__category .sub-items-list')
            .forEach(list => list.style.display = 'none')
    e.target.closest('.filter-wrapper__category')
            .querySelectorAll('button')
            .forEach(button => button.classList.remove('active-item'))

    if (targetCategory !== selectedCategory) {
      const subCategory = e.target.nextSibling
      if (subCategory) { subCategory.style.display = 'block' }

      if (e.target.classList.contains('sub-item')) {
        e.target.closest('ul').style.display = 'block'
      }

      setSelectedCategory(targetCategory)
    } else {
      setSelectedCategory('')
    }

    setCurrentPage(1)
  }

  const handleSelectBrand = (e) => {
    const brandID = e.target.parentElement.dataset.bid
    const newBrands =
      e.target.checked
        ? selectedBrands.concat(brandID)
        : selectedBrands.filter(e => e !== brandID)

    setSelectedBrands(newBrands)
    setCurrentPage(1)
  }

  const handlePriceChange = (e) => {
    setSelectedPriceRange(e.target.value)
    setCurrentPage(1)
  }

  const toggleFreeship = (e) => {
    setIsFreeship(e.target.checked)
    setCurrentPage(1)
  }

  const handleSelectRating = (e) => {
    const touchRating = e.target.dataset.rid
    const newRating = touchRating === selectedRating ? null : touchRating
    setSelectedRating(newRating)
    setCurrentPage(1)
  }

  const handleSearchProduct = (e) => {
    setProductNameParam(e.target.value)
    setCurrentPage(1)
  }

  const clearAllFilters = () => {
    document.querySelectorAll('.filter-wrapper__category .sub-items-list')
            .forEach(list => list.style.display = 'none')

    setSortCriteria('id_desc')
    setPerPage('16')
    setCurrentPage(1)
    setProductNameParam('')
    setSelectedCategory('')
    setSelectedBrands([])
    setSelectedPriceRange(null)
    setIsFreeship(false)
    setSelectedRating(null)
  }

  return (
    <div className='App'>
      <Header
        productNameParam={productNameParam}
        handleSearchProduct={handleSearchProduct}
      />
      <Content
        productNameParam={productNameParam}
        sortCriteria={sortCriteria}
        perPage={perPage}
        selectedBrands={selectedBrands}
        selectedPriceRange={selectedPriceRange}
        isFreeship={isFreeship}
        totalProductsFound={totalItems}
        categories={categories}
        brands={brands}
        products={products}
        pageCount={pageCount}
        sortItems={sortItems}
        selectPerPage={selectPerPage}
        currentPage={currentPage}
        selectedCategory={selectedCategory}
        currentRating={selectedRating}
        handlePageChange={handlePageChange}
        handleSelectCategory={handleSelectCategory}
        handleSelectBrand={handleSelectBrand}
        handlePriceChange={handlePriceChange}
        toggleFreeship={toggleFreeship}
        handleSelectRating={handleSelectRating}
        clearAllFilters={clearAllFilters}
      />
    </div>
  );
}

export default App;
