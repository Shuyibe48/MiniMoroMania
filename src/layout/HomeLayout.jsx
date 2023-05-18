import { Outlet } from 'react-router-dom';
import Menubar from '../pages/Menubar';
import Footer from '../pages/Footer';

const HomeLayout = () => {
    return (
        <>
            <Menubar />
            <h1>sdlfsal;djfl</h1>
            <Outlet />
            <Footer />
        </>
    );
};

export default HomeLayout;