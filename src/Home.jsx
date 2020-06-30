import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  background-color: ${(props) => (props.active ? "black" : "white")};
  color: ${(props) => (props.active ? "white" : "black")};

  button {
    font-size: 45px;
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
  @media (max-width: 650px) {
    button {
      font-size: 25px;
      top: 10;
    }
  }
`;

function App() {
  const [toggle, setToggle] = useState(false);
  const [name, setName] = useState("");
  const [favoriteAnimal, setFavoriteAnimal] = useState("");
  const [nameShowing, setNameShowing] = useState("");
  const [favoriteAnimalShowing, setfavoriteAnimalShowing] = useState("");

  function themeToggle() {
    if (toggle) {
      return setToggle(false);
    }
    setToggle(true);
  }
  const submitName = (event) => {
    event.preventDefault();
    setNameShowing(name);
  };
  const submitFavoriteAnimal = (event) => {
    event.preventDefault();
    setfavoriteAnimalShowing(favoriteAnimal);
  };
  return (
    <Wrapper active={toggle}>
      <form onSubmit={submitName}>
        <div>Your name?</div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input type="submit" />
      </form>
      <form onSubmit={submitFavoriteAnimal}>
        <div>Your favorite animal?</div>
        <input
          type="text"
          value={favoriteAnimal}
          onChange={(e) => setFavoriteAnimal(e.target.value)}
        />
        <input type="submit" />
      </form>
      {nameShowing && <div>{name}</div>}
      {favoriteAnimalShowing && <div>{favoriteAnimal}</div>}

      <div>
        <button onClick={themeToggle}>Background Theme</button>
      </div>
    </Wrapper>
  );
}

export default App;
