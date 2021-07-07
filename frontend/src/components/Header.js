import PropTypes from 'prop-types';
import NavItem from './NavItem';


const Header = (props) => {
    const onClick = () => {
        console.log('Click')
    }

    return (
        <header>
            <h1>{props.foo}</h1>
            <NavItem color="red" text="About Us" onClick={onClick} />
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
