import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services.jsx';
import ServicePage from './pages/ServicePage.jsx';
import ContactPage from './pages/Contact.jsx';
// import NotFound from './pages/NotFound';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/ServicePage" element={<ServicePage />} />
            <Route path="/contact" element={<ContactPage />} />
        </Routes>
    );
};

export default AppRoutes;
