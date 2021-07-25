import PropTypes from 'prop-types';
import NavItem from './NavItem';
import './Header.css';


const Header = () => {
    const onClick = () => {
        console.log('Click')
    }

    return (
        <header>
            <div><h1>SPACESHIP MUSIC COLLECTIVE</h1></div>
            <div><nav>
            <NavItem color="red" text="About Us" onClick={onClick} to={"/aboutUs"}/>
            <NavItem color="red" text="Home" onClick={onClick} to={"/"}/>
            </nav></div>
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
