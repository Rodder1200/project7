import {
  FETCH_USERS,
  FETCH_FIRST_USER,
  LINK_TO_NEXT_PAGE,
  FETCH_MORE_USERS,
  FETCH_USERS_ERROR,
  FETCH_FIRST_USER_ERROR
} from "../actions/types";

const initialState = {
  items: [],
  item: {},
  link: "",
  moreItems: [],
  error_message: "",
  error_fails: {},
  first_user_error: "",
  first_user_fails: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        items: action.payload.users,
        link: action.payload.links.next_url
      };
    case FETCH_USERS_ERROR:
      return {
        ...state,
        error_message: action.payload.message,
        error_fails: action.payload.fails
      };
    case FETCH_FIRST_USER:
      return {
        ...state,
        item: action.payload
      };
    case FETCH_FIRST_USER_ERROR:
      return {
        ...state,
        first_user_error: action.payload.message,
        first_user_fails: action.payload.fails
      };
    case LINK_TO_NEXT_PAGE:
      return {
        ...state,
        link: action.payload
      };
    case FETCH_MORE_USERS:
      return {
        ...state,
        moreItems: action.payload
      };
    default:
      return state;
  }
}
