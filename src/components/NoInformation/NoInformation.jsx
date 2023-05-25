import PropTypes from 'prop-types';

export const NoInformation = ({ string }) => {
    return (
        <p>We don`t have {string} for this movie</p>
    )
}
NoInformation.propTypes = {
   string: PropTypes.string.isRequired, 
}