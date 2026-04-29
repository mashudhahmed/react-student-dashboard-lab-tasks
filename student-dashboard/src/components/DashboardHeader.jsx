import PropTypes from 'prop-types';

const DashboardHeader = ({ title, tagline, navItems }) => {
  return (
    <header className="dashboard-header">
      <div className="header-content">
        <h1>{title}</h1>
        <p className="tagline">{tagline}</p>
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
};

export default DashboardHeader;