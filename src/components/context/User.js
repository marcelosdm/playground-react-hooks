import React, { useContext } from "react";
import ProfileContext from "./ProfileContext";
import Team from "./Team";

const User = () => {
  const context = useContext(ProfileContext);

  return (
    <div>
      <a href={context.url}>
        <img src={context.userImage} width="138px" />
      </a>
      <h1>{context.userName}</h1>
      <p>{context.fullName}</p>
      <Team />
    </div>
  );
};

export default User;
