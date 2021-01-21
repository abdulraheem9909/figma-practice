import React from "react";
import "./Background.css";
import image from "../../assets/Felix.png";
import icon from "../../assets/icon.svg";
import Mainbutton from "../../components/button/MainButton";
import Input from "../../components/input/MainInput";
import { connect } from "react-redux";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const Background = (props) => {
  const clickHandler = () => {
    props.clicked();
    props.history.push("/details");
  };
  return (
    <React.Fragment>
      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);

          props.clicked();
          props.history.push("/details");
        }}
      >
        <Form>
          <div className="background-container">
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
            
              <Input
                name="email"
                type="email"
                placeholder="Enter you email address"
              />
            </div>
            <div className="button">
              <Mainbutton>join now</Mainbutton>
            </div>
            <div className="title">An Audio Assistance for Happiness</div>
            <div className="desc">
              Audio magic with your best mates. Start and finish the day with
              good vibes
            </div>

            <div className="image">
              <img
                src={image}
                alt=""
                height="100%"
                width="100%"
                style={{ objectFit: "contain" }}
              ></img>
            </div>

            <div className="landscape">
              <div className="substract"></div>
              <div className="union"></div>
            </div>
          </div>
        </Form>
      </Formik>
    </React.Fragment>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    clicked: () => dispatch({ type: "CLICKED" }),
  };
};

export default connect(null, mapDispatchToProps)(Background);
