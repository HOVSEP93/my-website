import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Hovsep Stepanian </span>
            from <span className="purple"> Iraq 💜</span>
            <br />I am a junior Front-End web develompent & Graphic Designer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching football match ⚽
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking 🍔 (Eating 😉)
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">H.Stepanian</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
