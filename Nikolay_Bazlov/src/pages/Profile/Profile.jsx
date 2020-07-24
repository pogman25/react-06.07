import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { getProfileInfo } from "../../selectors/profileInfo";
import { getProfileSuccess } from "../../actions/profile";
import mockProfile from "./mockProfile";
import {connect} from "react-redux";


const Profile =  ( props ) => {

    useEffect(() => {
            setTimeout(() => {
                getProfileInfo(mockProfile);
                console.log(props);
            },1000);
    });

    return (
        <Layout>
            Здесь различная информация о профиле, например:
            <p>Ваше имя: </p>
            <p>Ваша фамилия: </p>
            <p>Ваш, не знаю, год рождения: </p>
        </Layout>
    )
};

const mapStateToProps = (store, ownProps) => {
    const {
        match: {
            params: { info },
        },
    }  = ownProps;
    return {
        currentChat: getProfileInfo(store, info),
    };
};

const mapDispatchToProps = {
    getProfileInfo: getProfileSuccess
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
