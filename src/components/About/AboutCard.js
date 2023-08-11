import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey, I am <span className="blue">Vaishali V</span>
            <span className="blue"> from Coimbatore, TamilNadu, India.</span>
            <br /><span className="purple">I am a 3rd year student in Kumaraguru College Of Technology and currently pursuing my degree in B.Tech Artificial Intelligence and Data Science</span>
            <br />
            I have great interests in Machine Learning and Metaverse.
            <br />
            <br />
            Apart from my academics I am passionate about a few stuffs.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading books
            </li>
            <li className="about-activity">
              <ImPointRight /> Painting
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
          </ul>

          <p style={{ color: "rgb(126, 155, 172)" }}>
            "Always Blooming"{" "}
          </p>
          <footer className="blockquote-footer">Vaishali V</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
