import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';


class Header extends PureComponent {
    render() {
        const {chatId} = this.props;
        return (
            <div>
                <h3>Chat #{chatId}</h3>
                <Link to="/profile/">Profile</Link>
            </div>
        )
    }
}

Header.propTypes = {
    chatId: PropTypes.number.isRequired
};

export default Header;
