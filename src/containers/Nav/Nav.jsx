import "./Nav.scss"
import {FaHome} from "react-icons/fa"
import {FiSend} from "react-icons/fi"
import {MdOutlineAddBox} from "react-icons/md"
import {RiCompassLine} from "react-icons/ri"
import {AiOutlineHeart} from "react-icons/ai"
import {CgProfile} from "react-icons/cg"
import { Link } from "react-router-dom"

const Nav = (props) => {
    const {profile} = props;

 const renderLink = () => {   
    if (profile.username === "coffee") {
        return (
            <Link to = "/coffeeguy">
                <div className="nav__home">
                    <FaHome />
                </div>
            </Link>
        )
    } else {
      return(  
        <Link to = {`/home/${profile.username}`}>
            <div className="nav__home">
                <FaHome />
            </div>
        </Link>
    )}
    }

    return (
        <div className="nav">
            <div className="nav__logo">
                <h1>InstaJoke</h1>
            </div>
            <div className="nav__search">
                <input
                value="Search"
                />
            </div>
            {renderLink()}
            <div className="nav__send">
                <FiSend />
            </div>
            <div className="nav__add">
                <MdOutlineAddBox />
            </div>
            <div className="nav__explore">
                <RiCompassLine />
            </div>
            <div className="nav__likes">
                <AiOutlineHeart />
            </div>
            <div className="nav__profile">
                <CgProfile />
            </div>
        </div>
    )
}

export default Nav;