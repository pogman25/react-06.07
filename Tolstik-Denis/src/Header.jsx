import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';

const styles = {
    headerContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px',
        width: '100%'
    },
    headerH3: {
        margin: 0,
        padding: 0,
    }
}

class Header extends PureComponent {
    render() {
        const {classes} = this.props; 
        const {chatId} = this.props;
        return (
            <div className={classes.headerContainer}>
                <h3 className={classes.headerH3}>Chat #{chatId}</h3>
                <Link to="/profile/">Profile</Link>
            </div>
        )
    }
}

Header.propTypes = {
    chatId: PropTypes.number.isRequired
};

export default withStyles(styles)(Header);
