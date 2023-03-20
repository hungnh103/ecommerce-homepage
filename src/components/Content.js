import '../styles/Content.scss'

import Filter from './content/Filter'
import MainContent from './content/MainContent'

const Content = ({ products }) => {
  return (
    <div className='content-wrapper'>
      <div className='content-wrapper__body'>
        <Filter />
        <MainContent products={products} />
      </div>
    </div>
  )
}

export default Content
