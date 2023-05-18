import { Outlet } from 'react-router-dom';
import Menubar from '../pages/Menubar';
import Footer from '../pages/Footer';

const HomeLayout = () => {
    return (
        <>
            <Menubar />
            <Outlet />
            <Footer />
        </>
    );
};

export default HomeLayout;