import { initialState, MOCK_ACTION, USERS_LIST, REQUEST_USERS, REQUEST_USERS_SUCCESS, REQUEST_USER_FAILED } from './constants';

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
  case USERS_LIST: {
    return {
      ...state,
      users: action.users,
    }
  }
  case REQUEST_USERS: {
    return {
      ...state,
      fetching: true,
    }
  }
  case REQUEST_USERS_SUCCESS: {
    return {
      ...state,
      fetching: false,
    }
  }
  case REQUEST_USER_FAILED: {
    return {
      ...state,
      fetching: false,
    }
  }
  default:
    return state;
  }
};
