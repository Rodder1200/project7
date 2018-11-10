import {
  FETCH_POSITIONS,
  FETCH_TOKEN,
  CHECK_NAME,
  CHECK_EMAIL,
  CHECK_PHONE,
  CHECK_POSITION,
  CHECK_PHOTO,
  CLEAR_FORM_DATA,
  SHOW_MODAL
} from "./types";

export const fetchPositions = () => dispatch => {
  const request = async () => {
    await fetch(
      "https://frontend-test-assignment-api.abz.agency/api/v1/positions",
      {
        method: "get"
      }
    )
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: FETCH_POSITIONS,
          payload: data.positions
        });
      })
      .catch(error => {
        console.log(error.message);
      });
  };
  request();
};

export const fetchToken = () => dispatch => {
  fetch("https://frontend-test-assignment-api.abz.agency/api/v1/token", {
    method: "get"
  })
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: FETCH_TOKEN,
        payload: data.token
      });
    });
};

export const clearFormData = () => dispatch => {
  dispatch({
    type: CLEAR_FORM_DATA,
    payload: null
  });
};

export const showModal = value => dispatch => {
  dispatch({
    type: SHOW_MODAL,
    payload: !value
  });
};

export const checkName = value => dispatch => {
  const re = /^\w+[\w ]{1,60}$/;
  const name = {};

  name.error = true;
  name.valid = false;

  if (re.test(value)) {
    name.valid = true;
    name.error = false;
    name.value = value;
  }

  dispatch({
    type: CHECK_NAME,
    payload: name
  });
};

export const checkEmail = value => dispatch => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const email = {};

  email.error = true;
  email.valid = false;

  if (re.test(value)) {
    email.valid = true;
    email.error = false;
    email.value = value;
  }

  dispatch({
    type: CHECK_EMAIL,
    payload: email
  });
};

export const checkPhone = value => dispatch => {
  const re = /^[\+]{0,1}380([0-9]{9})$/;
  const phone = {};

  phone.error = true;
  phone.valid = false;

  if (re.test(value)) {
    phone.valid = true;
    phone.error = false;
    phone.value = value;
  }

  dispatch({
    type: CHECK_PHONE,
    payload: phone
  });
};

export const checkPosition = value => dispatch => {
  let position = {};

  position.error = true;
  position.valid = false;

  if (value !== "") {
    position.value = value;
    position.valid = true;
    position.error = false;
  }
  dispatch({
    type: CHECK_POSITION,
    payload: position
  });
};

export const checkPhoto = file => dispatch => {
  const img = new Image();
  const photo = {};

  photo.error = true;
  photo.valid = false;

  file ? (img.src = window.URL.createObjectURL(file)) : null;

  if (file && (file.type == "image/jpeg" || file.type == "image/jpg")) {
    img.onload = () => {
      const width = img.naturalWidth,
        height = img.naturalHeight;

      if (file.size < 5242880 && width >= 70 && height >= 70) {
        photo.name = file.name;
        photo.value = file;
        photo.valid = true;
        photo.error = false;
      }
      dispatch({
        type: CHECK_PHOTO,
        payload: photo
      });
    };
  }
};
