import { useState, useEffect } from 'react'
import axios from 'axios'

import './App.scss';

import Header from './components/Header'
import Content from './components/Content'

function App() {
  const [products, setProducts] = useState([])
  const [totalItems, setTotalItems] = useState(0)
  const [perPage, setPerPage] = useState(4)
  const [pageCount, setPageCount] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    fetchData()
  }, [currentPage])

  const fetchData = async () => {
    const baseUrl = 'http://localhost:9000'
    const url = `${baseUrl}/products?_page=${currentPage}&_limit=${perPage}`

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

  const handlePageChange = (e) => {
    console.log(e.selected)
    setCurrentPage(e.selected + 1)
  }

  return (
    <div className='App'>
      <Header />
      <Content
        products={products}
        pageCount={pageCount}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}

export default App;
