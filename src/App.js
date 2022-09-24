import { useState } from "react";
import "./styles.css";
let hcolor = "blue";
let username = "rohit";
let errmsg = "!!! I don't know this emoji !!!";
export default function App() {
  const [emojiName, setEmojiName] = useState("");

  let emog = {
    "🐶": "dog",
    "🦊": "fox",
    "🐵": "monkey",
    "🦝": "racoon",
    "🐷": "pig",
    "🐻": "bear",
    "🐼": "panda",
    "🐇": "rabbit",
    "🐓": "rooster"
  };

  let emogweknow = Object.keys(emog);

  function inputchangehandler(event) {
    console.log("inputchange event called");
    if (emog[event.target.value] === undefined) {
      setEmojiName(errmsg);
    } else {
      setEmojiName(emog[event.target.value]);
    }
  }

  function clickEventHandler(emoji) {
    setEmojiName(emog[emoji]);
    console.log("clickevent called");
  }

  return (
    <div className="App">
      <h1 style={{ color: hcolor }}>welcome {username}</h1>

      <input
        id="in"
        style={{ textAlign: "center" }}
        onChange={inputchangehandler}
        // value={inputEmoji}
      ></input>

      <h3>{emojiName}</h3>

      <div></div>
      <div>
        {emogweknow.map(function (emoji) {
          return (
            <span
              style={{ padding: "0.5rem", cursor: "pointer" }}
              onClick={() => clickEventHandler(emoji)}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
