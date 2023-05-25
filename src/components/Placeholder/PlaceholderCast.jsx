import { Img } from "./Placeholder.styled";
import img from "../../image/noImagePlaceholder.jpg";

export const PlaceholderCast = () => {
    return (
        <Img src={img} alt="not available" width='100px' />
    )
}