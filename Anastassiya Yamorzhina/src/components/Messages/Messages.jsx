import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Container, Box } from '@material-ui/core';
import { BOT_NAME } from '../../utils/constants';
import Button from "@material-ui/core/Button";

const delMessage = (id) => {
    console.log(id);
}

const Messages = ({ messages }) => {

    return (
        <Container maxWidth="md">
            <Box display="flex" flexDirection="column">
                {messages.map(({ id, author, text }) => (
                    <Box boxShadow={3} m={2} p={1} width="25%" key={id} alignSelf={author === BOT_NAME ? 'flex-end' : 'flex-start'}>
                        <p>{`Author: ${author}`}</p>
                        <p>{`message: ${text}`}</p>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => delMessage(id)}
                        >
                            Del
                        </Button>
                    </Box>
                ))}
            </Box>
        </Container>
    );
};

Messages.propTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            author: PropTypes.string,
            text: PropTypes.string,
        }),
    ).isRequired,
};

export default memo(Messages);
