import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Developer 💻",
          // "Deep Learning Engineer",
          // "MERN Stack Developer",
          "Graphic Designer 🎨",
          "ui/ux Designer 😎",
          "Content Creator 😉",
          "Logo Designer 😍",
          "Chelsea FC fun ⚽",
          "Open Source Contributor 🙄",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
