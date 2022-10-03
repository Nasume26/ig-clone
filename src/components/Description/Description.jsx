import "./Description.scss"

const Description = (props) => {
    const {profile} = props;

    return (
        <div className="description">
            <p>What is up this is {profile.username}'s awesome mega cool radical
            profile. As you can see you can look at the same pictures any other user
            utilizing this application can access so you might say I am not 
            very unique. However the Dev also doesn't have several weeks to create a full
            stack clone of IG so this is the best I can do.</p>
        </div>
    )
}

export default Description;