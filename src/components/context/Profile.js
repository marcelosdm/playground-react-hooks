import React, { useContext } from "react";
import { ProfileContext } from "./ProfileContext";
import User from "./User";

const Profile = () => {
  // const context = useContext(ProfileContext);
  return (
    <div>
      <ProfileContext.Consumer>
        {context => <img src={context.companyImage} />}
      </ProfileContext.Consumer>
      <User />
    </div>
  );
};

export default Profile;
