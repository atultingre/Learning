import React, { useEffect, useState } from "react";
import axios from "axios";

const DataFetching = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Axios Fetching Data</h1>
      <ul>
        {posts.length &&
          posts.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  );
};

export default DataFetching;
