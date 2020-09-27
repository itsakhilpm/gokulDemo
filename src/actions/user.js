import userApi from '../services/userApi'

// 2nd step to invoke api call.

// export const callUserApi = (locationName) => {
//     return userApi.get(`${locationName}`);
// }

export const callUserApi = () =>
{
    return userApi.get();
}