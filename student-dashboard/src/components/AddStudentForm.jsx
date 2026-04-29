import { useState } from 'react';
import { useStudents } from '../context/StudentContext';

const AddStudentForm = () => {
  const { addStudent, students } = useStudents();
  const [formData, setFormData] = useState({
    name: '',
    id: '',
    major: '',
    gpa: '',
    courses: '',
  });
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    // ID validation
    if (!formData.id) {
      newErrors.id = 'Student ID is required';
    } else if (students.some(s => s.id === formData.id)) {
      newErrors.id = 'Student ID must be unique';
    } else if (!/^\d+$/.test(formData.id)) {
      newErrors.id = 'Student ID must be numeric';
    }
    
    // Major validation
    if (!formData.major) {
      newErrors.major = 'Major is required';
    }
    
    // GPA validation
    if (!formData.gpa) {
      newErrors.gpa = 'GPA is required';
    } else {
      const gpaNum = parseFloat(formData.gpa);
      if (isNaN(gpaNum) || gpaNum < 0 || gpaNum > 4.0) {
        newErrors.gpa = 'GPA must be between 0 and 4.0';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validate()) {
      const newStudent = {
        id: formData.id,
        name: formData.name,
        major: formData.major,
        gpa: parseFloat(formData.gpa),
        courses: formData.courses.split(',').map(c => c.trim()).filter(c => c),
      };
      
      addStudent(newStudent);
      
      // Reset form
      setFormData({
        name: '',
        id: '',
        major: '',
        gpa: '',
        courses: '',
      });
      
      setShowSuccess(true);
      
      // Auto-dismiss success message after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div style={{
      maxWidth: '600px',
      margin: '0 auto 30px',
      padding: '24px',
      background: 'white',
      borderRadius: '12px',
      boxShadow: '0 1px 3px 0 rgba(0,0,0,0.1)',
    }}>
      <h2 style={{ marginBottom: '20px', color: '#111827' }}>📝 Add New Student</h2>
      
      {showSuccess && (
        <div style={{
          background: '#d1fae5',
          color: '#065f46',
          padding: '12px',
          borderRadius: '8px',
          marginBottom: '20px',
        }}>
          ✅ Student added successfully!
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '10px',
              border: `1px solid ${errors.name ? '#ef4444' : '#d1d5db'}`,
              borderRadius: '6px',
              fontSize: '14px',
            }}
          />
          {errors.name && <p style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px' }}>{errors.name}</p>}
        </div>
        
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
            Student ID * (Numeric only)
          </label>
          <input
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
            placeholder="e.g., STU006"
            style={{
              width: '100%',
              padding: '10px',
              border: `1px solid ${errors.id ? '#ef4444' : '#d1d5db'}`,
              borderRadius: '6px',
              fontSize: '14px',
            }}
          />
          {errors.id && <p style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px' }}>{errors.id}</p>}
        </div>
        
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
            Major *
          </label>
          <select
            name="major"
            value={formData.major}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '10px',
              border: `1px solid ${errors.major ? '#ef4444' : '#d1d5db'}`,
              borderRadius: '6px',
              fontSize: '14px',
            }}
          >
            <option value="">Select Major</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Physics">Physics</option>
            <option value="Biology">Biology</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Chemistry">Chemistry</option>
          </select>
          {errors.major && <p style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px' }}>{errors.major}</p>}
        </div>
        
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
            GPA * (0.0 - 4.0)
          </label>
          <input
            type="number"
            name="gpa"
            step="0.1"
            min="0"
            max="4"
            value={formData.gpa}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '10px',
              border: `1px solid ${errors.gpa ? '#ef4444' : '#d1d5db'}`,
              borderRadius: '6px',
              fontSize: '14px',
            }}
          />
          {errors.gpa && <p style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px' }}>{errors.gpa}</p>}
        </div>
        
        <div style={{ marginBottom: '24px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
            Courses (comma-separated)
          </label>
          <input
            type="text"
            name="courses"
            placeholder="e.g., Mathematics, Physics, Computer Science"
            value={formData.courses}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              fontSize: '14px',
            }}
          />
          <p style={{ color: '#6b7280', fontSize: '11px', marginTop: '4px' }}>
            Separate multiple courses with commas
          </p>
        </div>
        
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '12px',
            background: '#6366f1',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'background 0.2s',
          }}
          onMouseEnter={(e) => e.target.style.background = '#4f46e5'}
          onMouseLeave={(e) => e.target.style.background = '#6366f1'}
        >
          ➕ Add Student
        </button>
      </form>
    </div>
  );
};

export default AddStudentForm;