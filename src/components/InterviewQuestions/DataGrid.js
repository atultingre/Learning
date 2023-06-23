import axios from "axios";
import { useEffect, useState } from "react";

const DataGrid = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
    <h1 style={{textAlign:"center"}}>Posts Fetching Data </h1>
      <table>
        <th>Id</th>
        <th>Title</th>
        <th>Body</th>
        {posts.map((post) => (
          <tr>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>{post.body}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};
export default DataGrid;
