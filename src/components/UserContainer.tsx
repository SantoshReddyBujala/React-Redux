import React from "react";
import { useSelector } from "react-redux";

const UserContainer = () => {
  const users: any = useSelector((state) => state);

  return (
    <div>
      <button onClick={() => {}}>Buy cake</button>
    </div>
  );
};

export default UserContainer;
