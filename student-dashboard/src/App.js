import { useEffect } from 'react';
import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import { StudentProvider, useStudents } from './context/StudentContext';
import DashboardHeader from './components/DashboardHeader';
import StudentCard from './components/StudentCard';
import SearchBar from './components/SearchBar';
import SortControls from './components/SortControls';
import AddStudentForm from './components/AddStudentForm';
import LoadingSpinner from './components/LoadingSpinner';

// This component uses the student context
const DashboardContent = () => {
  const { loading, getSortedStudents, favorites, toggleFavorite, removeStudent } = useStudents();

  const navItems = [
    { label: 'Dashboard', link: '/' },
    { label: 'Students', link: '/students' },
    { label: 'Courses', link: '/courses' },
    { label: 'Settings', link: '/settings' },
  ];

  const sortedStudents = getSortedStudents();

  // Update document title when student count changes
  useEffect(() => {
    document.title = `Dashboard - ${sortedStudents.length} Students`;
  }, [sortedStudents.length]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="app">
      <DashboardHeader 
        title="Student Dashboard"
        tagline="Track academic progress and manage student information"
        navItems={navItems}
      />
      <AddStudentForm />
      <SearchBar />
      <SortControls />
      <div className="student-grid">
        {sortedStudents.map((student) => (
          <StudentCard
            key={student.id}
            {...student}
            isFavorite={favorites[student.id] || false}
            onFavoriteToggle={() => toggleFavorite(student.id)}
            onRemove={() => removeStudent(student.id)}
          />
        ))}
      </div>
      {sortedStudents.length === 0 && (
        <div style={{ textAlign: 'center', padding: '50px', color: '#6b7280' }}>
          No students found matching your search.
        </div>
      )}
    </div>
  );
};

// Main App component with providers
function App() {
  return (
    <ThemeProvider>
      <StudentProvider>
        <DashboardContent />
      </StudentProvider>
    </ThemeProvider>
  );
}

export default App;