import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProfile } from '../actions/profile';
import PropTypes from "prop-types";
import { Backdrop, CircularProgress } from '@material-ui/core';


class Profile extends Component {    
    componentDidMount() {
        const { getProfileAction } = this.props;
        
        getProfileAction();
    }

    render() {
        const { profile, isLoading } = this.props;
        
        return (
            <div>
                <Backdrop open={isLoading}>
                    <CircularProgress color="inherit" />
                </Backdrop>
                <h3>My Profile</h3>
                {`Name: ${profile.firstName} surName: ${profile.surName}`}
            </div>
        )
    }
}


Profile.propTypes = {
    profile: PropTypes.shape({
        firstName: PropTypes.string,
        surName: PropTypes.string
    }).isRequired,
    isLoading: PropTypes.bool.isRequired,
    getProfileAction: PropTypes.func.isRequired,
};

const mapStateToProps = (store) => ({
    profile: store.profile.data,
    isLoading: store.profile.isLoading,
});

const mapDispatchToProps = { getProfileAction : getProfile };

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
