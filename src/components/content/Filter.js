import '../../styles/content/Filter.scss'

import Button from '@mui/material/Button'
import RefreshIcon from '@mui/icons-material/Refresh'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Switch from '@mui/material/Switch'
import Rating from '@mui/material/Rating'

const Filter = ({
  categories,
  brands,
  selectedCategory,
  selectedBrands,
  selectedPriceRange,
  isFreeship,
  currentRating,
  handleSelectCategory,
  handleSelectBrand,
  handlePriceChange,
  toggleFreeship,
  handleSelectRating,
  clearAllFilters
}) => {
  const isDisabled = (rating) => {
    if (!currentRating) return false
    return Number(currentRating) === rating ? false : true
  }

  return (
    <div className='filter-wrapper'>
      <div className='filter-wrapper__header'>
        <h2>Filters</h2>
        <Button
          startIcon={<RefreshIcon />}
          onClick={clearAllFilters}
        >
          Clear filters
        </Button>
      </div>

      <div className='filter-wrapper__type filter-wrapper__category'>
        <h3>Category</h3>
        <div>
          <ul>
            {categories.map(category => (
              <li key={category.id}>
                <Button
                  startIcon={
                    (category.sub_categories.length > 0) && (
                      selectedCategory === `,${category.id},`
                        ? <ArrowDropDownIcon />
                        : <ArrowDropUpIcon />
                    )
                  }
                  onClick={handleSelectCategory}
                  data-cid={category.id}
                  className={selectedCategory === `,${category.id},` ? 'active-item' : ''}
                >
                  {category.name} <span className='item-count-label'>{category.product_count}</span>
                </Button>

                {category.sub_categories.length > 0 && (
                  <ul
                    className='sub-items-list'
                    style={{ display: 'none' }}
                  >
                    {category.sub_categories.map(sub_cate => (
                      <li key={sub_cate.id}>
                        <Button
                          onClick={handleSelectCategory}
                          data-cid={sub_cate.id}
                          className={`sub-item ${selectedCategory === `,${sub_cate.id},` ? 'active-item' : ''}`}
                        >
                          {sub_cate.name} <span className='item-count-label'>{sub_cate.product_count}</span>
                        </Button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className='filter-wrapper__type'>
        <h3>Brand</h3>
        <div>
          <ul>
            {brands.map(brand => (
              <li key={brand.id}>
                <FormGroup>
                  <FormControlLabel
                    label={
                      <>
                        {brand.name}
                        <span className='item-count-label'>{brand.product_count}</span>
                      </>
                    }
                    control={
                      <Checkbox
                        checked={selectedBrands.includes(brand.id.toString())}
                        onChange={handleSelectBrand}
                        data-bid={brand.id}
                      />
                    }
                  />
                </FormGroup>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className='filter-wrapper__type'>
        <h3>Price</h3>
        <br />

        <Box sx={{ width: 200 }}>
          <Slider
            getAriaLabel={() => 'Filter by price'}
            defaultValue={[1, 1000]}
            value={selectedPriceRange ? selectedPriceRange : [1, 1000]}
            valueLabelDisplay='on'
            onChange={handlePriceChange}
            min={1}
            max={1000}
            valueLabelFormat={value => {
              return (
                <>
                  <span style={{color: '#ebb953'}}>$</span> {value.toLocaleString()}
                </>
              )
            }}
            disableSwap
          />
        </Box>
      </div>

      <div className='filter-wrapper__type'>
        <h3>Free Shipping</h3>

        <FormGroup>
          <FormControlLabel
            label='Display only items with free shipping'
            labelPlacement='start'
            control={<Switch onChange={toggleFreeship} checked={isFreeship} />}
          />
        </FormGroup>
      </div>

      <div className='filter-wrapper__type filter-wrapper__rating'>
        <h3>Rating</h3>

        <div onClick={handleSelectRating} data-rid={5} className='filter-wrapper__rating__row'>
          <Rating defaultValue={5} readOnly disabled={isDisabled(5)} />
        </div>
        <div onClick={handleSelectRating} data-rid={4} className='filter-wrapper__rating__row'>
          <Rating defaultValue={4} readOnly disabled={isDisabled(4)} />
        </div>
        <div onClick={handleSelectRating} data-rid={3} className='filter-wrapper__rating__row'>
          <Rating defaultValue={3} readOnly disabled={isDisabled(3)} />
        </div>
        <div onClick={handleSelectRating} data-rid={2} className='filter-wrapper__rating__row'>
          <Rating defaultValue={2} readOnly disabled={isDisabled(2)} />
        </div>
        <div onClick={handleSelectRating} data-rid={1} className='filter-wrapper__rating__row'>
          <Rating defaultValue={1} readOnly disabled={isDisabled(1)} />
        </div>
      </div>
    </div>
  )
}

export default Filter
