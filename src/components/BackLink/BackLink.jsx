import { HiArrowLeft } from "react-icons/hi";
import PropTypes from 'prop-types';
import { StyledLink } from "./BackLink.styled";

export const BackLink = ({to, children}) => {
    return (
        <StyledLink to={to}>
            <HiArrowLeft size="15" />
            {children}
        </StyledLink>
    )
}

BackLink.propTypes = {
    children: PropTypes.string.isRequired,
    to: PropTypes.object.isRequired,
}