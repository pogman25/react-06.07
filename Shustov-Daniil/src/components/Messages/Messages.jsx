import React, { memo, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'


const Messages = ({ messages }) => {
   
    return (
        <ul>
            { messages.map(({ id, author, text }) => (
              <li key = {id}>
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
        id: PropTypes.string,
    })).isRequired,
}

export default memo(Messages)