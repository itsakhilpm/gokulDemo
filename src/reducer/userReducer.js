const user =  (state = {}, action) => {
    let newState = {
        ...state,
    };
    switch (action.type) {
        case 'USER_FETCHED':
            newState = {
                ...state,
                userDetails: action.payload.userDetails,
            };
        default:
            break;
    }
    return newState;
}
export default user;
