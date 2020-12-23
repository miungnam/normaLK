import point from '../../point.js'
import constants from '../constants'
// функция проверят успешно ли отправился запрос
const checkResponse = (response, errText) => {
	if (!response.ok) throw new Error(errText)
	return response.json()
}
// функция вытаскивает из объекта ошибки строку
const errorHandler = (error) => (error.response ? error.response.data : error.message)

export const getData = (token) => (dispatch) => {
	dispatch({ type: constants.GET_DATA_LOADING })
	fetch(`${point}/api/auth/users/me/?`, {
		method: 'GET',
		headers: {
			Authorization: `Token ${token}`
		}
	})
		.then((response) => checkResponse(response, 'Ошибка'))
		.then((data) => {
			dispatch({ type: constants.GET_DATA_SUCCESS, data })
			console.log(token)
		})
		.catch((error) => {
			dispatch({ type: constants.GET_DATA_FAILED, error: errorHandler(error) })
			console.log('error')
		})
}
