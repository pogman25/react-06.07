import React, { memo } from "react";
import PropTypes from "prop-types";

const Message = ({ name }) => {
    return (
        <div>
            <h1>Hello {name}!!!!</h1>
        </div>
    );
};

Message.propTypes = {
    name: PropTypes.string,
};

export default memo(Message);
