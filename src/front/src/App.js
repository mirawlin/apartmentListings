import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AddApartmentForm from './components/AddApartmentForm.js';
import Home from './components/Home.js'; // Create a Home component for your landing page

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-apartment" element={<AddApartmentForm />} />
                {/* Add more routes as needed */}
            </Routes>
        </Router>
    );
};

export default App;
