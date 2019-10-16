import React, { useContext } from "react";
import { ProfileContext } from "./ProfileContext";

const ChangeTeam = () => {
  const context = useContext(ProfileContext);
  return (
    <>
      <button onClick={() => context.toggleTeam("team", "Kendo for Angular")}>
        Angular
      </button>
      <button onClick={() => context.toggleTeam("team", "Kendo for Vue")}>
        Vue
      </button>
      <button onClick={() => context.toggleTeam("team", "Kendo for React")}>
        React
      </button>
    </>
  );
};

export default ChangeTeam;
