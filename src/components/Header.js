import '../styles/Header.scss'

const Header = ({ productNameParam, handleSearchProduct }) => {
  return (
    <div className='header-wrapper'>
      <div className='header-wrapper__content'>
        <div className='header-wrapper__slogan'>Stop looking for an item - find it.</div>
        <div className='header-wrapper__search-bar'>
          <input
            type='text'
            value={productNameParam}
            placeholder='Search product by name'
            onChange={handleSearchProduct}
          />
        </div>
      </div>
    </div>
  )
}

export default Header
