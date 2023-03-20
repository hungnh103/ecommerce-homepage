import { useState, useEffect } from 'react'
import axios from 'axios'

import './App.scss';

import Header from './components/Header'
import Content from './components/Content'

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const url = 'http://localhost:9000/products'

    try {
      const response = await axios.get(url)
      const data = await response.data
      setProducts(data)
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <div className='App'>
      <Header />
      <Content products={products} />
    </div>
  );
}

export default App;
