import userApi from '../services/userApi'

// 2nd step to invoke api call.

// export const callUserApi = (locationName) => {
//     return userApi.get(`${locationName}`);
// }
const actionTypes = {
    USER_FETCHED: 'USER_FETCHED',
}
export const callUserApi = (dispatch) => {
    userApi.get().then(result => {
        dispatch({
            payload: {
                userFetched: {
                    userId: 25,
                    userName: 'Gokul'
                },
            },
            type: actionTypes.USER_FETCHED,
        });
    })
}