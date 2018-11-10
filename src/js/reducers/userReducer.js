import {
  FETCH_USERS,
  FETCH_FIRST_USER,
  LINK_TO_NEXT_PAGE,
  FETCH_MORE_USERS,
  NEW_USER
} from "../actions/types";

const initialState = {
  items: [],
  item: {},
  link: "",
  moreItems: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        items: action.payload
      };
    case FETCH_FIRST_USER:
      return {
        ...state,
        item: action.payload
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
