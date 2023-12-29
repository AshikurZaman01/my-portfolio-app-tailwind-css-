import { FaLinkedin, FaSquareFacebook } from "react-icons/fa6";
import { FaGithub, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-900 rounded mt-10">
                <div className="container m-auto flex justify-between px-4 py-6">
                    <div>
                        <p className="text-gray-300 text-sm">Copyright @ 2023</p>
                    </div>
                    <div>
                        <ul className="flex gap-4">
                            <li>
                                <a href=""><span><FaSquareFacebook /></span></a>
                            </li>
                            <li>
                                <a href=""><span><FaGithub  /></span></a>
                            </li>
                            <li>
                                <a href=""><span><FaLinkedin   /></span></a>
                            </li>
                            <li>
                                <a href=""><span><FaInstagramSquare /></span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;