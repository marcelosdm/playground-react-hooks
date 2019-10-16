import React, { useContext } from "react";
import { ProfileContext } from "./ProfileContext";

const Team = () => {
  const context = useContext(ProfileContext);

  return (
    <div>
      <p>{context.team}</p>
    </div>
  );
};

export default Team;
