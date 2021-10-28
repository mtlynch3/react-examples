import axios from "axios";

// ACTION TYPES;
const GET_USERS = "GET_USERS";

// ACTION CREATORS;
const getUsers = (users) => {
  return {
    type: GET_USERS,
    payload: users,
  };
};

// THUNK CREATORS;
export const getUsersThunk = () => async dispatch => {
	try {
		let res = await axios.get('https://jsonplaceholder.typicode.com/users');
		//res.data is the array returned by api endpoint
		//this is the payload we send to the reducer
		dispatch(getUsers(res.data));

	} catch(err) {
		console.error(err);
	}
};

// REDUCER;
export const reducer = (state = {users: []}, action) => {
//initial state has users as empty array
//after action GET_USERS the state will have
//the data from the API as users array
  switch (action.type) {
    case GET_USERS:
      return {
        users: action.payload,
      }
    default:
      return state;
  }
};