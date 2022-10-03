import "./Statistics.scss"

const Statistics = (props) => {
    const {imagesArr} = props;

    return (
        <div className="stats">
            <div className="stats__posts">
                <h3>{imagesArr.length}</h3>
                <p>posts</p>
            </div>
            <div className="stats__followers">
                <h3>80</h3>
                <p>followers</p>
            </div>
            <div className="stats__following">
                <h3>2.6b</h3>
                <p>following</p>
            </div>
        </div>
    )
}
export default Statistics;