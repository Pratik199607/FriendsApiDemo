import {
	CHANGE_SEARCH_FIELD,
	REQUESTS_ROBOTS_PENDING,
	REQUESTS_ROBOTS_SUCESS,
	REQUESTS_ROBOTS_FAILED,
} from "./constants.js";

export const setSearchField = (text) => ({
	type: CHANGE_SEARCH_FIELD,
	payload: text,
});

export const requestRobots = () => (dispatch) => {
	dispatch({ type: REQUESTS_ROBOTS_PENDING });
	fetch("https://my-json-server.typicode.com/Pratik199607/FriendiApiJson/user")
		.then((response) => response.json())
		.then((data) => dispatch({ type: REQUESTS_ROBOTS_SUCESS, payload: data }))
		.catch((error) => dispatch({ type: REQUESTS_ROBOTS_FAILED, payload: error }));
};
