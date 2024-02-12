/* eslint-disable react/prop-types */
function MyApp({ count, onClickButton }) {
  return (
    <div>
      <button onClick={onClickButton}>Clicked {count} times</button>
    </div>
  );
}

export default MyApp;
