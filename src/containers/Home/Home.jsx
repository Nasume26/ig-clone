import Description from "../../components/Description/Description";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import "./Home.scss"
import corn1 from "../../images/corn1.jpeg"
import corn2 from "../../images/Ears-corn.webp"

const Home = (props) => {
    const {profile} = props;

    const imagesArr = [corn1, corn2]

    const renderImages = imagesArr.map((image) => {
        return <img src= {image} />
    })

    return (
        <div className="home">
            <ProfileHeader profile = {profile}/>
            <Description profile = {profile}/>
            {renderImages}
        </div>
    )
}
export default Home;