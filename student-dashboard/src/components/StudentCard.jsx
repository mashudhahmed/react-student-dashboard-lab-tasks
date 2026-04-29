import PropTypes from 'prop-types';
import CourseTag from './CourseTag';
import StatBadge from './StatBadge';

const StudentCard = ({ name, id, gpa, major, courses, isFavorite, onFavoriteToggle }) => {
  const avatarInitial = name.charAt(0).toUpperCase();
  
  const courseColors = {
    'Mathematics': '#10b981',
    'Physics': '#f59e0b',
    'Computer Science': '#6366f1',
    'Chemistry': '#ef4444',
    'Biology': '#8b5cf6',
    'English': '#ec4899',
  };

  return (
    <div className="student-card">
      <div className="card-header">
        <div className="avatar">{avatarInitial}</div>
        <div className="student-info">
          <h3>{name}</h3>
          <div className="student-id">ID: {id}</div>
        </div>
        <button
          onClick={onFavoriteToggle}
          style={{
            background: 'none',
            border: 'none',
            fontSize: '24px',
            cursor: 'pointer',
            marginLeft: 'auto',
            color: isFavorite ? '#f59e0b' : '#d1d5db',
            transition: 'transform 0.2s',
          }}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        >
          {isFavorite ? '⭐' : '☆'}
        </button>
      </div>
      <div className="student-details">
        <StatBadge label="Major" value={major} />
        <StatBadge label="GPA" value={gpa.toFixed(2)} />
      </div>
      <div className="courses-container">
        {courses.map((course, index) => (
          <CourseTag key={index} courseName={course} color={courseColors[course] || '#6366f1'} />
        ))}
      </div>
    </div>
  );
};

StudentCard.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  gpa: PropTypes.number.isRequired,
  major: PropTypes.string.isRequired,
  courses: PropTypes.arrayOf(PropTypes.string).isRequired,
  isFavorite: PropTypes.bool,
  onFavoriteToggle: PropTypes.func,
};

StudentCard.defaultProps = {
  isFavorite: false,
  onFavoriteToggle: () => {},
};

export default StudentCard;