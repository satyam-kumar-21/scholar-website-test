import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Courses from './components/Courses/Courses';
import Colleges from './components/Colleges/Colleges';
import Infrstructure from './components/infrastructures/Infrstructure';
import Contact from './components/contact/Contact';
import ScholarForm from './components/ScholarForm/ScholarForm';
import Inquiry from './components/admission_inquiry/Inquiry';
import Login from './components/Student_Login/Login';
import ScrollToTop from './components/ScrollToTop';
import Signup from './components/Signup/Signup';

const App = () => {
    return (
        <Router>
            <Header />
            <ScrollToTop/>
            <Routes>
                {/* Route for Home page */}
                <Route path="/" element={<Home />} />
                
                {/* Route for About page */}
                <Route path="/about" element={<About />} />
                
                {/* Route for Courses page */}
                <Route path="/courses" element={<Courses />} />
                
                {/* Route for Colleges page */}
                <Route path="/colleges" element={<Colleges />} />
                
                {/* Route for Infrastructure page */}
                <Route path="/infrastructure" element={<Infrstructure />} />
                
                {/* Route for Contact page */}
                <Route path="/contact" element={<Contact />} />

                <Route path="/apply-scholar-program" element={<ScholarForm />} />
                <Route path="/admission-inquiry" element={<Inquiry />} />

                <Route path="/create-account" element={<Signup />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
};

export default App;
