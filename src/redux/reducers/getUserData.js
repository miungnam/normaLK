import constants from "../constants"

const initialState = {
	data: {},
	userData: {
		success: false,
		loading: false,
		failed: false,
		error: ''
	},

}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case constants.GET_DATA_SUCCESS:
			return {
				...state,
				data: action.data,
				get: {
					success: true,
					loading: false,
					failed: false,
					error: ''
				}
			}
		case constants.GET_DATA_LOADING:
			return {
				...state,
				get: {
					success: false,
					loading: true,
					failed: false,
					error: ''
				}
			}
		case constants.GET_DATA_FAILED:
			return {
				...state,
				get: {
					success: false,
					loading: false,
					failed: true,
					error: action.error
				}
			}
		default:
			return state
	}
}

export default reducer
