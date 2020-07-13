import React, { memo, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const Messages = ({ messages }) => {
   
    return (
        <ul>
            { messages.map(({ author, text }, index) => (
              <li key = {index}>
                  <p>{`Author: ${author}`}</p>
                  <p>{`Message: ${text}`}</p>
              </li>
            ) )}
        </ul>
    )
}
Messages.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape({
        author: PropTypes.string,
        text: PropTypes.string,
    })).isRequired,
}

export default memo(Messages)