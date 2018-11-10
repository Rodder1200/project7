import {
  FETCH_POSITIONS,
  FETCH_TOKEN,
  NEW_USER,
  CHECK_NAME,
  CHECK_EMAIL,
  CHECK_PHONE,
  CHECK_POSITION,
  CHECK_PHOTO,
  CLEAR_FORM_DATA,
  SHOW_MODAL
} from "../actions/types";

const initialState = {
  positions: [],
  name: {},
  email: {},
  phone: {},
  position: {},
  photo: {},
  token: "",
  modal: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSITIONS:
      return {
        ...state,
        positions: action.payload
      };
    case FETCH_TOKEN:
      return {
        ...state,
        token: action.payload
      };
    case CHECK_NAME:
      return {
        ...state,
        name: action.payload
      };
    case CHECK_EMAIL:
      return {
        ...state,
        email: action.payload
      };
    case CHECK_PHONE:
      return {
        ...state,
        phone: action.payload
      };
    case CHECK_POSITION:
      return {
        ...state,
        position: action.payload
      };
    case CHECK_PHOTO:
      return {
        ...state,
        photo: action.payload
      };
    case CLEAR_FORM_DATA:
      return {
        ...state,
        name: {},
        email: {},
        phone: {},
        position: {},
        photo: {},
        token: ""
      };
    case SHOW_MODAL:
      return {
        ...state,
        modal: action.payload
      };
    default:
      return state;
  }
}
