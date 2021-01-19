import React from "react";
import "./Background.css";
import image from "../../assets/Felix.png";
import icon from "../../assets/icon.svg";
import Mainbutton from "../../components/button/MainButton";
import MainInput from "../../components/input/MainInput";

const Background = () => {
  return (
    <div className="grid-container">
      <div className="sun">
        <div className="Ellipse3"></div>
        <div className="Ellipse2"></div>
        <div className="Ellipse1"></div>
      </div>
      <div className="navbar"></div>
      <div className="flex">Flex</div>
      <div className="icon">
        <div className="rectangle">
          <img src={icon} alt="" />
          <div className="volumn"></div>
        </div>
      </div>

      <div className="content"></div>
      <div className="email">
        <MainInput />
      </div>
      <div className="button">
        <Mainbutton onClick={alert}>join now</Mainbutton>
      </div>
      <div className="title">An Audio Assistance for Happiness</div>
      <div className="desc">
        Audio magic with your best mates. Start and finish the day with good
        vibes
      </div>

      <div className="image">
        <img src={image} alt="" height="100%" width="100%" />
      </div>

      <div className="landscape">
        <div className="substract"></div>
        <div className="union"></div>
      </div>
    </div>
  );
};

export default Background;
