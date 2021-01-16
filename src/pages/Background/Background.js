import React from "react";
import "./Background.css";
import image from "../../assets/Felix.png";

const Background = () => {
  return (
    <div className="grid-container">
      <div className="sun">
        <div className="Ellipse1"></div>
        <div className="Ellipse2"></div>
        <div className="Ellipse3"></div>
      </div>
      <div className="navbar"></div>
      <div className="flex">Flex</div>
      <div className="icon">
        <div className="rectangle">
          <div className="vector">x</div>
          <div className="volumn"></div>
        </div>
      </div>

      <div className="content"></div>
      <div className="email">
        <input
          type="text"
          placeholder="Enter your Email"
          required
          style={{
            backGround: "linear-gradient(180deg, #FFFFFF 0%, #E5E5E5 100%)",
            border: "1px solid rgba(22, 29, 94, 0.1)",
            boxShadow: "0px 2px 8px rgba(22, 68, 94, 0.12)",
            borderRadius: "20px",
            width: "410px",
            height: "48px",
          }}
        />
      </div>
      <div className="button">
        <div className="btn" onClick={() => alert("slider")}>
          Join Now
        </div>
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
