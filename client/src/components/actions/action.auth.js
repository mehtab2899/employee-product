import axios from "axios";
import {
	LOGIN_SUCCESS,
	LOGIN_FAILED,
	SIGNUP_SUCCESS,
	SIGNUP_FAILED,
	// AUTHENTICATION_SUCCESS,
	// AUTHENTICATION_FAILED,
	// LOGOUT_ADMIN,
} from "./action.types";

// signin admin
export const login = (adminID, password) => async (dispatch) => {
	const config = {
		header: {
			"Content-Type": "application/json",
		},
	};

	const body = { adminID, password };

	try {
		const res = await axios.post(`/api/auth/signin-admin`, body, config);
		dispatch({
			type: LOGIN_SUCCESS,
			payload: res.data,
		});
		console.log("admin logged in");
	} catch (error) {
		dispatch({
			type: LOGIN_FAILED,
		});
	}
};

// signup admin

export const signup = (adminID, org_name, password) => async (dispatch) => {
	const config = {
		header: {
			"Content-Type": "application/json",
		},
	};

	const body = { adminID, org_name, password };

	try {
		const res = await axios.post(`/api/auth/signup-admin`, body, config);
		dispatch({
			type: SIGNUP_SUCCESS,
			payload: res.data,
		});
		console.log("admin created");
	} catch (error) {
		dispatch({
			type: SIGNUP_FAILED,
		});
	}
};
