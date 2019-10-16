import React from "react";
import { render } from "react-dom";

const ProfileContext = React.createContext();
class ProfileProvider extends React.Component {
  state = {
    company: "Progress",
    companyImage: "https://svgshare.com/i/9ir.svg",
    url: "https://www.telerik.com/kendo-react-ui/",
    userImage: "https://i.imgur.com/Y1XRKLf.png",
    userName: "Kendoka",
    fullName: "Kendō No Arikata",
    team: "KendoReact",
    changeTeam: team =>
      this.setState({
        team: `Kendo${team}`
      })
  };
  render() {
    return (
      <ProfileContext.Provider value={this.state}>
        {this.props.children}
      </ProfileContext.Provider>
    );
  }
}

export { ProfileContext, ProfileProvider };
