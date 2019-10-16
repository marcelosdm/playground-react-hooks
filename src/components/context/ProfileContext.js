import React, { useState } from "react";

const ProfileContext = React.createContext();
const ProfileProvider = props => {
  const userInformation = {
    company: "Progress",
    companyImage: "https://svgshare.com/i/9ir.svg",
    url: "https://www.telerik.com/kendo-react-ui/",
    userImage: "https://i.imgur.com/Y1XRKLf.png",
    userName: "Kendoka",
    fullName: "Kendō No Arikata",
    team: "KendoReact",
    toggleTeam: (property, value) => {
      setUserInfo({ ...userInfo, [property]: value });
    }
  };
  const [userInfo, setUserInfo] = useState(userInformation);

  return (
    <ProfileContext.Provider value={userInfo}>
      {props.children}
    </ProfileContext.Provider>
  );
};

export { ProfileContext, ProfileProvider };
