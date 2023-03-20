import '../styles/Header.scss'

const Header = () => {
  return (
    <div className='header-wrapper'>
      <div className='header-wrapper__content'>
        <div className='header-wrapper__slogan'>Stop looking for an item - find it.</div>
        <div className='header-wrapper__search-bar'>
          <input type="text" placeholder='Product, brand, color, ...' />
        </div>
      </div>
    </div>
  )
}

export default Header
