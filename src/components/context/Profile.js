import React, { useContext } from "react";
import ProfileContext from "./ProfileContext";
import User from "./User";

const Profile = () => {
  const context = useContext(ProfileContext);
  return (
    <div>
      <img src={context.companyImage} />
      <User />
    </div>
  );
};

export default Profile;
