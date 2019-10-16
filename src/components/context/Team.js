import React, { useContext } from "react";
import { ProfileContext } from "./ProfileContext";

const Team = () => {
  // const context = useContext(ProfileContext);

  return (
    <ProfileContext.Consumer>
      {context => (
        <div>
          <p>{context.team}</p>
        </div>
      )}
    </ProfileContext.Consumer>
  );
};

export default Team;
