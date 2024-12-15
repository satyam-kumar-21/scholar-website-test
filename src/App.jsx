import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Courses from './components/Courses/Courses';
import Infrstructure from './components/infrastructures/Infrstructure';
import Contact from './components/contact/Contact';
import ScholarForm from './components/ScholarForm/ScholarForm';
import Inquiry from './components/admission_inquiry/Inquiry';
import Login from './components/Student_Login/Login';
import ScrollToTop from './components/ScrollToTop';
import Signup from './components/Signup/Signup';
import Scholar from './components/scholar/Scholar';
import StudentDashboard from './components/studentDashboard/StudentDashboard';
import EditProfile from './components/studentDashboard/EditProfile';
import PrivateRoute from './components/PrivateRoute'; // Import the PrivateRoute component
import Footer from './components/footer/Footer';
import Placement from './components/placement/Placement';

const App = () => {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <Routes>
        {/* Route for Home page */}
        <Route path="/" element={<Home />} />

        {/* Route for About page */}
        <Route path="/about" element={<About />} />

        {/* Route for Courses page */}
        <Route path="/courses" element={<Courses />} />

        {/* Route for Scholar page */}
        <Route path="/scholar-info" element={<Scholar />} />

        <Route path="/placement" element={<Placement />} />

        {/* Route for Infrastructure page */}
        <Route path="/infrastructure" element={<Infrstructure />} />

        {/* Route for Contact page */}
        <Route path="/contact" element={<Contact />} />

        {/* Protected route for Apply Scholar Program */}
        <Route
          path="/apply-scholar-program"
          element={
            <PrivateRoute>
              <ScholarForm />
            </PrivateRoute>
          }
        />

        {/* Route for Admission Inquiry */}
        <Route path="/admission-inquiry" element={<Inquiry />} />

        {/* Route for Signup page */}
        <Route path="/signup" element={<Signup />} />

        {/* Route for Login page */}
        <Route path="/login" element={<Login />} />

        {/* Route for Student Dashboard */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <StudentDashboard />
            </PrivateRoute>
          }
        />

        {/* Protected route for Edit Profile */}
        <Route
          path="/edit-profile"
          element={
            <PrivateRoute>
              <EditProfile />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
