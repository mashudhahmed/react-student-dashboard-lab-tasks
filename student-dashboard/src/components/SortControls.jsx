import PropTypes from 'prop-types';

const SortControls = ({ sortBy, onSortChange }) => {
  const options = [
    { value: 'default', label: '📋 Default' },
    { value: 'name', label: '📝 Name (A-Z)' },
    { value: 'gpa', label: '⭐ GPA (High-Low)' },
  ];

  return (
    <div style={{ maxWidth: '1400px', margin: '16px auto', padding: '0 24px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
      {options.map(opt => (
        <button
          key={opt.value}
          onClick={() => onSortChange(opt.value)}
          style={{
            padding: '8px 20px',
            background: sortBy === opt.value ? '#6366f1' : 'white',
            color: sortBy === opt.value ? 'white' : '#374151',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '500',
            transition: 'all 0.2s',
          }}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
};

SortControls.propTypes = {
  sortBy: PropTypes.string.isRequired,
  onSortChange: PropTypes.func.isRequired,
};

export default SortControls;