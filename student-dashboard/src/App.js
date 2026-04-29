import './App.css';
import DashboardHeader from './components/DashboardHeader';
import StudentCard from './components/StudentCard';

function App() {
  // Student data
  const students = [
    {
      id: '22-47811-1',
      name: 'Meow',
      major: 'Computer Science',
      gpa: 3.8,
      courses: ['Mathematics', 'Computer Science', 'Physics'],
    },
    {
      id: '22-47812-2',
      name: 'Meow Meow',
      major: 'Physics',
      gpa: 3.5,
      courses: ['Physics', 'Mathematics', 'Chemistry'],
    },
    {
      id: '22-47813-3',
      name: 'Meow Meow Meow',
      major: 'Biology',
      gpa: 3.9,
      courses: ['Biology', 'Chemistry', 'Mathematics'],
    },
    {
      id: '22-47814-4',
      name: 'Meow Meow Meow Meow',
      major: 'Mathematics',
      gpa: 3.7,
      courses: ['Mathematics', 'Physics', 'Computer Science'],
    },
  ];

  const navItems = [
    { label: 'Dashboard', link: '/' },
    { label: 'Students', link: '/students' },
    { label: 'Courses', link: '/courses' },
    { label: 'Settings', link: '/settings' },
  ];

  return (
    <div className="app">
      <DashboardHeader 
        title="Student Dashboard"
        tagline="Track academic progress and manage student information"
        navItems={navItems}
      />
      <div className="student-grid">
        {students.map((student) => (
          <StudentCard
            key={student.id}
            name={student.name}
            id={student.id}
            gpa={student.gpa}
            major={student.major}
            courses={student.courses}
          />
        ))}
      </div>
    </div>
  );
}

export default App;