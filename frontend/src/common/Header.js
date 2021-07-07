import PropTypes from 'prop-types';
import NavItem from './NavItem';
import './Header.css';


const Header = (props) => {
    const onClick = () => {
        console.log('Click')
    }

    return (
        <header>
            <h1>{props.foo}</h1>
            <nav>
            <NavItem color="red" text="About Us" onClick={onClick} to={"/aboutUs"}/>
            <NavItem color="red" text="Home" onClick={onClick} to={"/"}/>
            </nav>
        </header>
    )
}

Header.defaultProps = {
    foo: 'no egg',
}

Header.propTypes = {
    foo: PropTypes.string.isRequired,
}

export default Header
