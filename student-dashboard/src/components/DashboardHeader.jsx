import PropTypes from 'prop-types';
import { useTheme } from '../context/ThemeContext';
import { useStudents } from '../context/StudentContext';

const DashboardHeader = ({ title, tagline, navItems }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { favoriteCount } = useStudents();

  return (
    <header className="dashboard-header" style={{
      background: isDarkMode ? '#1f2937' : 'white',
      color: isDarkMode ? 'white' : '#111827',
      transition: 'all 0.3s ease',
    }}>
      <div className="header-content">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
          <div>
            <h1 style={{ color: isDarkMode ? '#818cf8' : '#6366f1' }}>{title}</h1>
            <p className="tagline" style={{ color: isDarkMode ? '#9ca3af' : '#6b7280' }}>{tagline}</p>
          </div>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <div style={{ 
              background: '#fef3c7', 
              padding: '8px 18px', 
              borderRadius: '10px',
              color: '#d97706',
              fontWeight: '600',
              fontSize: '14px'
            }}>
              ⭐ Favorites: {favoriteCount}
            </div>
            <button
              onClick={toggleTheme}
              style={{
                padding: '8px 16px',
                background: isDarkMode ? '#374151' : '#e5e7eb',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '20px',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            >
              {isDarkMode ? '☀️ Light' : '🌙 Dark'}
            </button>
          </div>
        </div>
        <nav className="nav-bar">
          {navItems.map((item, index) => (
            <a 
              key={index} 
              href={item.link}
              style={{ color: isDarkMode ? '#9ca3af' : '#6b7280' }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

DashboardHeader.propTypes = {
  title: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default DashboardHeader;