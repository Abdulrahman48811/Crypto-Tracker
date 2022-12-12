import React from "react";
import hussein from "../Assets/Images/Hussein.jpg";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { SocialIcon } from "react-social-icons";
import Abdulrahman from "../Assets/Images/abdulrahman.JPG";
import Header from "./Header";
export default function About() {
  return (
    <div>
      <Header/>
      <div className="split left">
        <div className="centered">
          <img src={Abdulrahman} alt="Avatar" className="abdo-image" />
          <h2 className="name">ABDULRAHMAN MOHAMMED</h2>
          <p1>
            <h6>
              Full-Stack Web/Mobile Developer <br />{" "}
            </h6>
            <p>
              <bde className="fa fa-map-marker"> San Diego, California</bde>
              <br />
              <bde className="fa fa-map-marker"> Toronto, Ontario</bde>
            </p>
            {/* Socials: <br /> */}
            <div className="socialfor">
              <SocialIcon
                target="_blank"
                url="https://www.linkedin.com/in/abdulrahman-mohammed-b48456230/"
                style={{ height: 45, width: 45 }}
              />
              <SocialIcon
                target="_blank"
                url="https://github.com/Abdulrahman48811"
                style={{ height: 45, width: 45 }}
              />
              <SocialIcon
                target="_blank"
                url="https://www.instagram.com/abdulrahmancodes/"
                bgColor="#d92e7f"
                style={{ height: 45, width: 45 }}
              />
              <SocialIcon
                target="_blank"
                url="https://abdulrahmanmohd.vercel.app/"
                bgColor="#835C3B"
                style={{ height: 45, width: 45 }}
              />
            </div>
          </p1>
        </div>
      </div>

      <div className="split right">
        <div className="centered">
          <img src={hussein} alt="avatar" />
          <h2>Hussein Hussein</h2>
          <span className="title">Front-end web/Mobile developer</span> <br /> <br/>
          <p1>
          <bde className="fa fa-map-marker location"> Columbus, Ohio</bde><br/>
            
             <div className="Hussein-social">
            <a
              href="http://instagram.com/hussein_597"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="icon" style={{ height: 50, width: 30 }}></FaInstagram>
            </a>
            <br></br>
            <a
              href="https://www.linkedin.com/in/hussein-hussein-99a8221ba/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="icon"style={{ height: 50, width: 30 }} ></FaLinkedin>
            </a>
            <br></br>
            <a
              href="https://github.com/husseinx2"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="icon" style={{ height: 50, width: 30 }}></FaGithub>
            </a>
            </div>
            <br></br>
          </p1>
        </div>
      </div>
    </div>
  );
}
