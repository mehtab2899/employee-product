import {
	LOGIN_SUCCESS,
	LOGIN_FAILED,
	SIGNUP_SUCCESS,
	SIGNUP_FAILED,
	// AUTHENTICATION_SUCCESS,
	// AUTHENTICATION_FAILED,
	// LOGOUT_ADMIN,
} from "../actions/action.types";

const initialState = {
	access: localStorage.getItem("access"),
	isAuthenticated: null,
	user: null,
};

export default function (state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case LOGIN_SUCCESS:
			localStorage.setItem("access", payload.token);
			return {
				...state,
				isAuthenticated: true,
				access: payload.token,
			};

		case SIGNUP_SUCCESS:
			return {
				...state,
				isAuthenticated: false,
			};

		case (LOGIN_FAILED, SIGNUP_FAILED):
			localStorage.removeItem("access");
			return {
				...state,
				isAuthenticated: false,
				user: null,
			};

		default:
			return state;
	}
}
