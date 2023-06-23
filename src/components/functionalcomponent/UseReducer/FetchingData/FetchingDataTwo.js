import axios from "axios";
import React, { useEffect, useReducer } from "react";

const initialState = {
  loading: true,
  post: {},
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        post: {},
        error: "Something wents wrong!",
      };
    default:
      return state;
  }
};

const FetchingDataTwo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      //   .get("https://jsonplaceholder.typicode.com/posts")
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        //   console.log(response.data)
        dispatch({
          type: "FETCH_SUCCESS",
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR" });
      });
  }, []);
  return (
    <div>
      <h1>Fetching Data using useReducer Hook</h1>
      {/* {state.loading ? (
        "Loading..."
      ) : (
        <div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Body</th>
              </tr>
            </thead>
            <tbody>
              {state.post.map((post) => (
                <tr key={post.id}>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )} */}
      {state.loading ? "Loading..." : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
};

export default FetchingDataTwo;
