export const getProfileInfo = (store, info) => {
    const currentInfo = store;
    if (currentInfo) {
        return currentInfo;
    }
    return {
        list: [],
    }
};