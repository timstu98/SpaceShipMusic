import PropTypes from 'prop-types'


const NavItem = ({ color, text, onClick }) => {
    return (
        <button style={{ backgroundColor: color }} onClick={onClick}>{text}</button>
    )
}

NavItem.defaultProps = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default NavItem
