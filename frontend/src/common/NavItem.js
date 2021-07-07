import PropTypes from 'prop-types'
import { Link } from "react-router-dom";


const NavItem = ({ color, text, onClick, to }) => {
    return (
        <Link to={to} ><button style={{ backgroundColor: color }} onClick={onClick} className="NavItem">{text}</button></Link>
    )
}

NavItem.defaultProps = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default NavItem
