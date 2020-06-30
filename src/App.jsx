import React, { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://www.reddit.com/r/reactjs.json");
      const json = await response.json();
      setPosts(json.data.children.map((c) => c.data));
    }
    fetchData();
  }, [setPosts]);
  console.log(posts);

  return (
    <div>
      <ol>
        {posts.map((post, idx) => (
          <li key={idx}>{post.title},</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
