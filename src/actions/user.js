import userApi from '../services/userApi'

export const callUserApi = () => {
    return userApi.get('todos/1')
}