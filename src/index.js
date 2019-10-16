import React from "react";
import ReactDOM from "react-dom";
// import CounterClass from "./components/CounterClass";
// import CounterHooks from "./components/CounterHooks";
// import GreetingHooks from "./components/names/GreetingHooks";
import { ProfileProvider } from "./components/context/ProfileContext";
import Profile from "./components/context/Profile";

const App = () => (
  <>
    {/* <CounterClass />
      <CounterHooks /> */}
    <ProfileProvider>
      <Profile />
    </ProfileProvider>
  </>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
