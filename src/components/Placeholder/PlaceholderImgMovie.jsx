import { Img } from "./Placeholder.styled";
import img from "../../image/noImagePlaceholder.jpg";

export const PlaceholderImgMovie = () => {
    return (
        <Img src={img} alt="not available" width='300px' />
    )
}