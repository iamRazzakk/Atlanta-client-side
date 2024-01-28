import EditorChoice from "./EditorChoice";
import Footer from "./Footer";
import Header from "./Header";
import Membership from "./Membership";
import Spotlight from "./Spotlight";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <EditorChoice></EditorChoice>
            <Spotlight></Spotlight>
            <Membership></Membership>
            <Footer></Footer>
        </div>
    );
};

export default Home;