/* eslint-disable import/prefer-default-export */
export const getFullName = ({ profile }) => {
    const { name, lastName } = profile;
    return `${name} ${lastName}`;
};