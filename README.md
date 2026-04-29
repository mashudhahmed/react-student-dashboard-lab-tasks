# 📚 React Student Dashboard

A complete student dashboard built with React as part of a 3-lab progressive learning series.

<img width="948" height="470" alt="image" src="https://github.com/user-attachments/assets/f20585a9-ef2f-4f44-92d3-1695a7a61a62" />

-

<img width="945" height="473" alt="image" src="https://github.com/user-attachments/assets/0f8f3b7d-aa8f-439b-999e-9e6c985e3b37" />



## 📊 Lab Completion

| Lab | Topics | Status |
|-----|--------|--------|
| Lab 01 | Components, Props, Styling | ✅ |
| Lab 02 | State, Effects, Interactivity | ✅ |
| Lab 03 | Context API, Forms, Validation | ✅ |

## ✨ Features

- 🔍 Live search by name or major
- ⭐ Favorite toggle with counter
- 📊 Sort by Name or GPA
- 🌓 Light/Dark theme toggle
- 📝 Add student form with validation
- 🗑️ Remove student
- 💾 localStorage persistence
- ⏳ Loading spinner
- 📱 Responsive design

## 🛠️ Technologies

- React 18
- Context API
- CSS3 (Custom Properties)
- PropTypes
- localStorage

## 🚀 Quick Start

```bash
cd student-dashboard
npm install
npm start
```

## 📁 Project Structure
```bash
student-dashboard/
├── src/
│   ├── components/
│   │   ├── StudentCard.jsx
│   │   ├── CourseTag.jsx
│   │   ├── StatBadge.jsx
│   │   ├── DashboardHeader.jsx
│   │   ├── SearchBar.jsx
│   │   ├── SortControls.jsx
│   │   ├── AddStudentForm.jsx
│   │   └── LoadingSpinner.jsx
│   ├── context/
│   │   ├── ThemeContext.jsx
│   │   └── StudentContext.jsx
│   ├── styles/
│   │   └── App.css
│   └── App.js
└── package.json
```

## 🌿 Git Branches

| Branch | Contains |
|--------|----------|
| `main` | Complete project (All 3 labs) |
| `lab-01` | Lab 01 only |
| `lab-02` | Labs 01 - 02 |
| `lab-03` | All 3 labs |

## 📝 Form Validation

| Field | Rule |
|-------|------|
| Full Name | Required |
| Student ID | Unique & Numeric |
| Major | Required |
| GPA | 0.0 - 4.0 |
| Courses | Optional |

## 📱 Responsive Design

| Screen | Cards per row |
|--------|---------------|
| Desktop | 4 |
| Tablet | 2-3 |
| Mobile | 1 |

## 👨‍💻 Author

Name : [**Mashudh Ahmed**](www.linkedin.com/in/mashudhahmed)


## 📄 License

MIT
