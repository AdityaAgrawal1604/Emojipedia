import React from "react";
import Element from "./Element";
import emojis from "../emojipedia";

function CreateElement(emoji) {
  return (
    <Element
      key={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      description={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojis.map(CreateElement)};</dl>
    </div>
  );
}

export default App;
