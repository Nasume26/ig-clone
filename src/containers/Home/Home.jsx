import Description from "../../components/Description/Description";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import "./Home.scss"

const Home = (props) => {
const {profile} = props;

    return (
        <div className="home">
            <ProfileHeader profile = {profile}/>
            <Description profile = {profile}/>
        </div>
    )
}
export default Home;