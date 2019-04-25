import { MOCK_ACTION, USERS_LIST, REQUEST_USERS, REQUEST_USERS_SUCCESS, REQUEST_USER_FAILED } from './constants';

import { fetchUsers } from '../service';

export const requestUsers = () => ({
  type: REQUEST_USERS,
})

export const requestUsersSuccess = () => ({
  type: REQUEST_USERS_SUCCESS,
})

export const requestUsersFailed = () => ({
  type: REQUEST_USER_FAILED,
})

export const getUsers = () => async (dispatch) => {
  dispatch(requestUsers())
  try {
    const users = await fetchUsers();
    dispatch({
      type: USERS_LIST,
      users,
    });
    dispatch(requestUsersSuccess());
  }
  catch(error) {
    dispatch(requestUsersFailed())
  }
}