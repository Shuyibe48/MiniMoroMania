import { useContext } from 'react';
import Banner from '../components/Banner';
import { RotateLoader } from 'react-spinners';
import Gallery from '../components/Gallery';



const Home = () => {
    // const { chefs } = useContext(AuthContext)

    return (
        <>
            <Banner />
            <Gallery />
        </>
    );
};

export default Home;