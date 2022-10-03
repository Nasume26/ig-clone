import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import "./Home.scss"

const Home = (props) => {
const {profile} = props;

    return (
        <div>
            <ProfileHeader profile = {profile}/>
        </div>
    )
}
export default Home;