import Skills from "../Skills/Skills";
import Technologies from "../Technologies/Technologies";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";

const Home = () => {
    return (
        <div>
            <div><Header></Header></div>
            <div><Hero></Hero></div>
            <div id="technologies"><Technologies ></Technologies></div>
            <div><Skills></Skills></div>
        </div>
    );
};

export default Home;