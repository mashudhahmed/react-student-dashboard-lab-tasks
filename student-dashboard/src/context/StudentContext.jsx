import { createContext, useState, useContext, useEffect } from 'react';

const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [favorites, setFavorites] = useState({});

  // Load data from localStorage on startup
  useEffect(() => {
    const savedStudents = localStorage.getItem('students');
    const savedFavorites = localStorage.getItem('favorites');
    
    if (savedStudents) {
      setStudents(JSON.parse(savedStudents));
      setLoading(false);
    } else {
      // Default student data
      const defaultStudents = [
        { id: 'STU001', name: 'Alice Johnson', major: 'Computer Science', gpa: 3.8, courses: ['Mathematics', 'Computer Science', 'Physics'] },
        { id: 'STU002', name: 'Bob Smith', major: 'Physics', gpa: 3.5, courses: ['Physics', 'Mathematics', 'Chemistry'] },
        { id: 'STU003', name: 'Carol Davis', major: 'Biology', gpa: 3.9, courses: ['Biology', 'Chemistry', 'Mathematics'] },
        { id: 'STU004', name: 'David Wilson', major: 'Mathematics', gpa: 3.7, courses: ['Mathematics', 'Physics', 'Computer Science'] },
        { id: 'STU005', name: 'Emma Brown', major: 'Computer Science', gpa: 3.6, courses: ['Computer Science', 'Mathematics', 'English'] },
      ];
      setStudents(defaultStudents);
      setLoading(false);
    }
    
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  // Save to localStorage when data changes
  useEffect(() => {
    if (students.length > 0) {
      localStorage.setItem('students', JSON.stringify(students));
    }
  }, [students]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Add new student
  const addStudent = (newStudent) => {
    setStudents(prev => [...prev, newStudent]);
  };

  // Remove student
  const removeStudent = (studentId) => {
    setStudents(prev => prev.filter(student => student.id !== studentId));
    // Also remove from favorites if present
    setFavorites(prev => {
      const newFavorites = { ...prev };
      delete newFavorites[studentId];
      return newFavorites;
    });
  };

  // Toggle favorite
  const toggleFavorite = (studentId) => {
    setFavorites(prev => ({
      ...prev,
      [studentId]: !prev[studentId]
    }));
  };

  // Filter students by search
  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.major.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort students
  const getSortedStudents = () => {
    const sorted = [...filteredStudents];
    if (sortBy === 'name') {
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (sortBy === 'gpa') {
      return sorted.sort((a, b) => b.gpa - a.gpa);
    }
    return sorted;
  };

  // Calculate favorite count
  const favoriteCount = Object.values(favorites).filter(isFav => isFav).length;

  return (
    <StudentContext.Provider value={{
      students,
      loading,
      searchQuery,
      setSearchQuery,
      sortBy,
      setSortBy,
      favorites,
      toggleFavorite,
      addStudent,
      removeStudent,
      getSortedStudents,
      favoriteCount,
    }}>
      {children}
    </StudentContext.Provider>
  );
};

export const useStudents = () => {
  const context = useContext(StudentContext);
  if (!context) {
    throw new Error('useStudents must be used within StudentProvider');
  }
  return context;
};