import PropTypes from 'prop-types';

const SearchBar = ({ searchQuery, onSearchChange }) => {
  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
      <input
        type="text"
        placeholder="🔍 Search by name or major..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        style={{
          width: '100%',
          padding: '12px 16px',
          fontSize: '14px',
          border: '1px solid #e5e7eb',
          borderRadius: '8px',
          outline: 'none',
        }}
        onFocus={(e) => e.target.style.borderColor = '#6366f1'}
        onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
      />
    </div>
  );
};

SearchBar.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};

export default SearchBar;