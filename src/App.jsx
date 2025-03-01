import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import './assets/fonts/font/_stylesheet.scss';
import './assets/_variables.scss'

const App = () => {
    return (
        <>
            <AppRoutes />
        </>
    );
};

export default App;