import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services.jsx';
import ServicePage from './pages/ServicePage.jsx';
// import NotFound from './pages/NotFound';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Services" element={<Services />} />
            {/*<Route path="/contact" element={<Contact />} />*/}
            <Route path="/ServicePage" element={<ServicePage />} />
        </Routes>
    );
};

export default AppRoutes;
