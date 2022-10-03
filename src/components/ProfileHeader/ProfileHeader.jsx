import "./ProfileHeader.scss"
import {CgProfile} from "react-icons/cg"
import { FiMoreHorizontal } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";

const ProfileHeader = (props) => {
const {profile} = props;


    return (
        <div className="profile-header">
            <div className="profile-header__pfp">
                <CgProfile />
            </div>
            <div className="profile-header__midsection">
                <div className="profile-header__midsection__username">
                    <h1>{profile.username}</h1>
                </div>
                <div className="profile-header__midsection__follow">
                    Follow
                </div>
            </div>
            <div className="profile-header__end">
                <div className="profile-header__end__more">
                    <FiMoreHorizontal />
                </div>
                <div className="profile-header__end__select">
                    <MdKeyboardArrowDown />
                </div>
            </div>
        </div>
    )
}
export default ProfileHeader;