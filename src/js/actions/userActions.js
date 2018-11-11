import {
  FETCH_USERS,
  FETCH_FIRST_USER,
  LINK_TO_NEXT_PAGE,
  FETCH_MORE_USERS
} from "./types";

export const fetchUsers = number => dispatch => {
  const request = async () => {
    await fetch(
      `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=${number}`,
      {
        method: "get"
      }
    )
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: FETCH_USERS,
          payload: data.users
        });
      })
      .catch(error => {
        console.log(error.message);
      });
  };
  request();
};

export const fetchFirstUser = () => dispatch => {
  const request = async () => {
    await fetch(
      "https://frontend-test-assignment-api.abz.agency/api/v1/users/1",
      {
        method: "get"
      }
    )
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: FETCH_FIRST_USER,
          payload: data.user
        });
      })
      .catch(error => {
        console.log(error.message);
      });
  };
  request();
};

export const getLinkToNext = value => dispatch => {
  if (value == "reset") {
    dispatch({
      type: LINK_TO_NEXT_PAGE,
      payload:
        "https://frontend-test-assignment-api.abz.agency/api/v1/users?page=2&count=6"
    });
  } else {
    const request = async () => {
      await fetch(
        value == "3" || value == "6"
          ? `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=${value}`
          : value,
        {
          method: "get"
        }
      )
        .then(response => response.json())
        .then(data => {
          dispatch({
            type: LINK_TO_NEXT_PAGE,
            payload: data.links.next_url
          });
        })
        .catch(error => {
          console.log(error.message);
        });
    };
    request();
  }
};

export const getMoreUsers = (users, link) => dispatch => {
  if (users == "reset") {
    dispatch({
      type: FETCH_MORE_USERS,
      payload: false
    });
  } else if (!users) {
    const request = async () => {
      await fetch(
        "https://frontend-test-assignment-api.abz.agency/api/v1/users?page=2&count=6",
        {
          method: "get"
        }
      )
        .then(response => response.json())
        .then(data => {
          dispatch({
            type: FETCH_MORE_USERS,
            payload: data.users
          });
        })
        .catch(error => {
          console.log(error.message);
        });
    };
    request();
  } else {
    const request = async () => {
      await fetch(link, {
        method: "get"
      })
        .then(response => response.json())
        .then(data => {
          dispatch({
            type: FETCH_MORE_USERS,
            payload: users.concat(data.users)
          });
        })
        .catch(error => {
          console.log(error.message);
        });
    };
    request();
  }
};
