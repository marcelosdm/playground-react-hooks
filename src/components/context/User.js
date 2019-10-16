import React, { Fragment, useContext } from "react";
import { ProfileContext } from "./ProfileContext";
import Team from "./Team";

const User = () => {
  const context = useContext(ProfileContext);

  return (
    <div>
      <Fragment>
        <a href={context.url}>
          <img src={context.userImage} width="138px" />
        </a>
        <h1>{context.userName}</h1>
        <p>{context.fullName}</p>
        <Team />
        <button onClick={() => context.changeTeam("Angular")}>Angular</button>
        <button onClick={() => context.changeTeam("Vue")}>Vue</button>
        <button onClick={() => context.changeTeam("React")}>React</button>
      </Fragment>
    </div>
  );
};

export default User;
