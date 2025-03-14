import PropTypes from 'prop-types';

const SortingControls = ({ onSort, currentSort }) => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-4">
      <div className="d-flex align-items-center">
        <label className="me-2">Sort By:</label>
        <select 
          className="form-select" 
          value={currentSort}
          onChange={(e) => onSort(e.target.value)}
        >
          <option value="">Default</option>
          <option value="price_asc">Price: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
          <option value="name_asc">Name: A to Z</option>
          <option value="name_desc">Name: Z to A</option>
          <option value="rating_desc">Rating: High to Low</option>
        </select>
      </div>
      
      <div className="d-flex align-items-center">
        <label className="me-2">Show:</label>
        <select className="form-select me-2">
          <option>12</option>
          <option>24</option>
          <option>48</option>
        </select>
        
        <div className="btn-group">
          <button className="btn btn-outline-secondary">
            <i className="bi bi-grid"></i>
          </button>
          <button className="btn btn-outline-secondary">
            <i className="bi bi-list"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

SortingControls.propTypes = {
  onSort: PropTypes.func.isRequired,
  currentSort: PropTypes.string.isRequired
};

export default SortingControls;
