import React from "react";
import ReactDOM from "react-dom";
// import CounterClass from "./components/CounterClass";
// import CounterHooks from "./components/CounterHooks";
// import GreetingHooks from "./components/names/GreetingHooks";
import Profile from "./components/context/Profile";

function App() {
  return (
    <>
      {/* <CounterClass />
      <CounterHooks /> */}
      <Profile />
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
