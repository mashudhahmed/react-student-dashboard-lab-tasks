import { useState, useEffect } from 'react';
import './styles/App.css';
import DashboardHeader from './components/DashboardHeader';
import StudentCard from './components/StudentCard';
import SearchBar from './components/SearchBar';
import SortControls from './components/SortControls';
import LoadingSpinner from './components/LoadingSpinner';

function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [favorites, setFavorites] = useState({});

  // Simulated API fetch
  useEffect(() => {
    const timer = setTimeout(() => {
      const mockStudents = [
        { id: 'STU001', name: 'Alice Johnson', major: 'Computer Science', gpa: 3.8, courses: ['Mathematics', 'Computer Science', 'Physics'] },
        { id: 'STU002', name: 'Bob Smith', major: 'Physics', gpa: 3.5, courses: ['Physics', 'Mathematics', 'Chemistry'] },
        { id: 'STU003', name: 'Carol Davis', major: 'Biology', gpa: 3.9, courses: ['Biology', 'Chemistry', 'Mathematics'] },
        { id: 'STU004', name: 'David Wilson', major: 'Mathematics', gpa: 3.7, courses: ['Mathematics', 'Physics', 'Computer Science'] },
        { id: 'STU005', name: 'Emma Brown', major: 'Computer Science', gpa: 3.6, courses: ['Computer Science', 'Mathematics', 'English'] },
      ];
      setStudents(mockStudents);
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  // Filter students based on search
  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.major.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Update document title
  useEffect(() => {
    document.title = `Dashboard - ${filteredStudents.length} Students`;
  }, [filteredStudents.length]);

  // Sort students
  const getSortedStudents = () => {
    const sorted = [...filteredStudents];
    
    if (sortBy === 'name') {
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (sortBy === 'gpa') {
      return sorted.sort((a, b) => b.gpa - a.gpa);
    }
    return sorted; // default order
  };

  // Toggle favorite
  const toggleFavorite = (studentId) => {
    setFavorites(prev => ({
      ...prev,
      [studentId]: !prev[studentId]
    }));
  };

  // Calculate favorite count
  const favoriteCount = Object.values(favorites).filter(isFav => isFav).length;

  const navItems = [
    { label: 'Dashboard', link: '/' },
    { label: 'Students', link: '/students' },
    { label: 'Courses', link: '/courses' },
    { label: 'Settings', link: '/settings' },
  ];

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="app">
      <DashboardHeader 
        title="Student Dashboard"
        tagline="Track academic progress and manage student information"
        navItems={navItems}
        favoriteCount={favoriteCount}
      />
      <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <SortControls sortBy={sortBy} onSortChange={setSortBy} />
      <div className="student-grid">
        {getSortedStudents().map((student) => (
          <StudentCard
            key={student.id}
            {...student}
            isFavorite={favorites[student.id] || false}
            onFavoriteToggle={() => toggleFavorite(student.id)}
          />
        ))}
      </div>
      {getSortedStudents().length === 0 && (
        <div style={{ textAlign: 'center', padding: '50px', color: '#6b7280' }}>
          No students found matching your search.
        </div>
      )}
    </div>
  );
}

export default App;