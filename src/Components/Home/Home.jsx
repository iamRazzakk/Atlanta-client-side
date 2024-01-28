import EditorChoice from "./EditorChoice";
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
        </div>
    );
};

export default Home;