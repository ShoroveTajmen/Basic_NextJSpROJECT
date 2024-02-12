import { useState } from "react";
import MyApp from "./MyApp";

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <h1>Counters that update together</h1>
      <MyApp count={count} onClickButton={handleClick} />
      <MyApp count={count} onClickButton={handleClick} />
    </>
  );
}

export default App;
