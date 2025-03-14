import PropTypes from 'prop-types';

const FilterSection = ({ onFilterChange, filters, onPriceRangeChange }) => {
  const priceRanges = [
    { label: 'All', value: '' },
    { label: '$0 - $500', value: '0-500' },
    { label: '$501 - $1000', value: '501-1000' },
    { label: '$1001 - $2000', value: '1001-2000' },
    { label: 'Over $2000', value: '2001-999999' }
  ];

  const categories = [
    'All',
    'Gaming Laptops',
    'Custom PCs',
    'Office Laptops',
    'Gaming Accessories'
  ];

  return (
    <div className="bg-light p-3 rounded">
      <div className="text-center mb-4">
        <h5 className="fw-bold mb-3">Filters</h5>
        <button className="btn btn-outline-secondary w-100">
          Clear Filter
        </button>
      </div>

      <div className="mb-4">
        <h5 className="fw-bold mb-3">Search</h5>
        <input
          type="text"
          className="form-control"
          placeholder="Search products..."
          value={filters.name}
          onChange={(e) => onFilterChange('name', e.target.value)}
        />
      </div>

      <div className="mb-4">
        <h5 className="fw-bold mb-3">Categories</h5>
        {categories.map((category, index) => (
          <div className="form-check mb-2" key={index}>
            <input
              className="form-check-input"
              type="radio"
              name="category"
              id={`category-${index}`}
              value={category}
              checked={filters.category === category || (category === 'All' && !filters.category)}
              onChange={(e) => onFilterChange('category', e.target.value === 'All' ? '' : e.target.value)}
            />
            <label className="form-check-label" htmlFor={`category-${index}`}>
              {category}
            </label>
          </div>
        ))}
      </div>

      <div className="mb-4">
        <h5 className="fw-bold mb-3">Price Range</h5>
        {priceRanges.map((range, index) => (
          <div className="form-check mb-2" key={index}>
            <input
              className="form-check-input"
              type="radio"
              name="priceRange"
              id={`price-${index}`}
              value={range.value}
              checked={filters.priceRange === range.value}
              onChange={(e) => onPriceRangeChange(e.target.value)}
            />
            <label className="form-check-label" htmlFor={`price-${index}`}>
              {range.label}
            </label>
          </div>
        ))}
      </div>

      <div className="mb-4">
        <h5 className="fw-bold mb-3">Availability</h5>
        <div className="form-check mb-2">
          <input
            className="form-check-input"
            type="checkbox"
            id="inStock"
          />
          <label className="form-check-label" htmlFor="inStock">
            In Stock Only
          </label>
        </div>
      </div>

      <div>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h6 className="mb-0">Filter Name</h6>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9326ad59a058ecf01720c3885beadd603b9841918fe205a45fea5973ec1984aa?placeholderIfAbsent=true&apiKey=1a2630dba26c44fe94fe53d5e705e42a"
            alt="Toggle"
            style={{ width: "16px", height: "16px" }}
          />
        </div>
        <button className="btn btn-primary w-100">Apply Filters (2)</button>
      </div>
    </div>
  );
};

FilterSection.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  filters: PropTypes.shape({
    category: PropTypes.string,
    priceRange: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  onPriceRangeChange: PropTypes.func.isRequired
};

export default FilterSection;
