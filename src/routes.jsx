import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage.jsx';
import Contact from './pages/ServicePage.jsx';
// import NotFound from './pages/NotFound';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/ServicePage" element={<ServicePage />} />
            <Route path="/contact" element={<Contact />} />
            {/*<Route path="*" element={<NotFound />} />*/}
        </Routes>
    );
};

export default AppRoutes;
