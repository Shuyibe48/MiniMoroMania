import Banner from '../components/Banner';
import Gallery from '../components/Gallery';
import CategoryTab from '../components/CategoryTab';
import ContactPage from '../components/ContactPage';



const Home = () => {
    // const { chefs } = useContext(AuthContext)

    return (
        <>
            <Banner />
            <Gallery />
            <CategoryTab />
            <ContactPage />
        </>
    );
};

export default Home;