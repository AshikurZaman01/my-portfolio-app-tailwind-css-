import Technologies from "../Technologies/Technologies";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";

const Home = () => {
    return (
        <div>
            <div><Header></Header></div>
            <div><Hero></Hero></div>
            <div><Technologies></Technologies></div>
        </div>
    );
};

export default Home;