import "./ImageSelect.scss"
import {BiGrid} from "react-icons/bi"
import { BiMoviePlay } from "react-icons/bi"
import { AiOutlinePlayCircle } from "react-icons/ai"
import { AiOutlineTag } from "react-icons/ai"

const ImageSelect = (props) => {


    return (
        <div className="image-select">
            <div className="image-select__grid">
                <BiGrid />
            </div>
            <div className="image-select__movie">
                <BiMoviePlay />
            </div>
            <div className="image-select__video">
                <AiOutlinePlayCircle />
            </div>
            <div className="image-select__tagged">
                <AiOutlineTag />
            </div>
        </div>
    )
}
export default ImageSelect;