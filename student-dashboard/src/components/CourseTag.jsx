import PropTypes from 'prop-types';

const CourseTag = ({ courseName, color }) => {
  const tagStyle = {
    backgroundColor: color || '#6366f1',
  };

  return (
    <span className="course-tag" style={tagStyle}>
      {courseName}
    </span>
  );
};

CourseTag.propTypes = {
  courseName: PropTypes.string.isRequired,
  color: PropTypes.string,
};

CourseTag.defaultProps = {
  color: '#6366f1',
};

export default CourseTag;