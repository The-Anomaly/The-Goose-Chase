import { Cinematics, Credit, Launch, Play, Profile, Splash } from "components";
import React from "react";

function App() {
  return (
    <main className="App">
      <Launch />
      <Cinematics />
      <Splash />
      <Profile />
      <Play />
      <Credit />
    </main>
  );
}

export default App;
