import React, {PureComponent} from 'react';
import PropTypes from "prop-types";


class Header extends PureComponent {
    render() {
        const {header} = this.props;
        return (
            <h3>{header}</h3>
        );
    }
}

Header.propTypes = {
    header: PropTypes.string.isRequired
};

export default Header;
