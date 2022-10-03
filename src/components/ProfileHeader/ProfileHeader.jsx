import "./ProfileHeader.scss"
import {CgProfile} from "react-icons/cg"

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
        </div>
    )
}
export default ProfileHeader;