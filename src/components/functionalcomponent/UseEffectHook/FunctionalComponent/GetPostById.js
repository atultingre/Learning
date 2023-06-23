import axios from "axios";
import React, { useEffect, useState } from "react";

const GetPostById = () => {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);


  const handleFetch =()=>{
    setIdFromButtonClick(id)
  }

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((response => setPost(response.data)))
      .catch((err) => console.log(err));
  }, [idFromButtonClick]);

  return (
    <div>
      <h1>Get Post By Id</h1>
      <div>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        <button onClick={handleFetch}>Fetch Post </button>
        <p>Post Title: {post.title}</p>
      </div>
    </div>
  );
};

export default GetPostById;
