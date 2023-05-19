import Banner from '../components/Banner';
import Gallery from '../components/Gallery';
import CategoryTab from '../components/CategoryTab';



const Home = () => {
    // const { chefs } = useContext(AuthContext)

    return (
        <>
            <Banner />
            <Gallery />
            <CategoryTab />
        </>
    );
};

export default Home;