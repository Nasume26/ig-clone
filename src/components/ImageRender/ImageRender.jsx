import "./ImageRender.scss"

const ImageRender = (props) => {
    const {src} = props;

    return (
        <div className="image-render">
            <img src={src} />
        </div>
    )
}

export default ImageRender;