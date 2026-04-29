import PropTypes from 'prop-types';

const DashboardHeader = ({ title, tagline, navItems, favoriteCount }) => {
  return (
    <header className="dashboard-header">
      <div className="header-content">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
          <div>
            <h1>{title}</h1>
            <p className="tagline">{tagline}</p>
          </div>
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
        </div>
        <nav className="nav-bar">
          {navItems.map((item, index) => (
            <a key={index} href={item.link}>
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
  favoriteCount: PropTypes.number,
};

DashboardHeader.defaultProps = {
  favoriteCount: 0,
};

export default DashboardHeader;