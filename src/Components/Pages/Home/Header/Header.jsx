import { Link } from "react-router-dom";
import Logo from "./Logo";
import { GoProjectSymlink } from "react-icons/go";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

const Header = () => {
    return (
        <div>
            <div className="flex  justify-between items-center py-5">
                <div className="text-4xl"><Logo></Logo></div>

                <div>
                    <nav>
                        <ul className="flex items-center gap-10 text-xl">
                            <li><Link to={'/project'} className="flex items-center gap-2"><span><IoHomeOutline /></span> Home</Link></li>
                            <li><Link className="flex items-center gap-2"><span><GoProjectSymlink /></span> Technologies</Link></li>
                            <li><Link className="flex items-center gap-2"><span><FaRegUser /></span> About me</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;