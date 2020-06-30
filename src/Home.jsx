import React, { useEffect, useState } from "react";
import styled from "styled-components";

const BackgroundTheme = styled.div`
  height: 100%;
  background-color: ${(props) => (props.active ? "black" : "white")};
  color: ${(props) => (props.active ? "white" : "black")};
  ol {
    margin: 0;
  }
  li {
    padding: 5px;
  }
`;

function App() {
  const [posts, setPosts] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://www.reddit.com/r/reactjs.json");
      const json = await response.json();
      setPosts(json.data.children.map((c) => c.data));
    }
    fetchData();
  }, [setPosts]);

  function themeToggle() {
    if (toggle) {
      return setToggle(false);
    } else {
      return setToggle(true);
    }
  }
  console.log(posts);

  return (
    <BackgroundTheme active={toggle}>
      <div style={{ textAlign: "center" }}>
        <button onClick={themeToggle}>Background Theme</button>
      </div>
      <ol>
        {posts.map((post, idx) => (
          <li key={idx}>
            {post.title}, <br />
            {post.author}
          </li>
        ))}
      </ol>
    </BackgroundTheme>
  );
}

export default App;
