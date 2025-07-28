import { useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);

  const { name, location, contact } = props;
  return (
    <div className="user-card">
      <h1>Count:{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <h2>{name}</h2>
      <h3>{location}</h3>
      <h4>{contact}</h4>
    </div>
  );
};
export default User;
