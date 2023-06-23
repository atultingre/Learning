import axios from "axios";
import React, { useEffect, useState } from "react";

const FetchingDataOne = () => {
  const [posts, setPosts] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        setLoading(false);
        setPosts(response.data);
        setError("");
      })
      .catch((error) => {
        setLoading(false);
        setPosts({});
        setError("Someting wents wrong!");
      });
  }, []);
  return (
    <div>
      <h1>Data Fetching Using useState</h1>
      {loading ? "Loading..." : posts.title}
      {error ? error : null}
    </div>
  );
};

export default FetchingDataOne;
