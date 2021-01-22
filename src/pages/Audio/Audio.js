import React from "react";
import "./Audio.css";
import cross from "../../assets/cross.svg";
import Button from "../../components/button/MainButton";
import Radio from "../../components/FormikForm/radio";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";

const Audio = (props) => {
  const crossed = () => {
    props.crossed();
    props.history.push("/");
  };
  return (
    <Formik
      initialValues={{
        selectRadio: "",
        air: "",
        spotify: "",
      }}
      validationSchema={Yup.object({
        selectRadio: Yup.string().required("Required"),
        air: Yup.string().required("Required"),
        spotify: Yup.string().required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);

        props.history.push("/details/habbits");
      }}
    >
      <Form>
        <div className="grid-audio">
          <div className="nav"></div>
          <div className="title-logo">1</div>
          <div className="icon">
            <div className="cross" onClick={crossed}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingRight: "2px",
                }}
              >
                <img src={cross} alt="" height="40%" width="40%" />
              </div>
            </div>
          </div>
          <div className="main-title">Build your audio preference</div>

          <div className="op-title">
            What kind of mobile device do you prefer
          </div>
          <div
            classname="op-containner"
            style={{ gridArea: " 6 / 2 / 8 / 13", display: "flex" }}
          >
            <div className="op1">
              <Radio name="selectRadio" value="op1" id="op1" label="Iphone" />
            </div>
            <div className="op2">
              <Radio name="selectRadio" value="op2" id="op2" label="Android" />
            </div>
          </div>

          <div className="air-title">Do you own AirPods ? </div>
          <div
            style={{
              gridArea: "9 / 2 / 11 / 13",
              display: "flex",
              width: "100vw",
              flexWrap: "wrap",
              alignContent: "space-between",
            }}
          >
            <div className="air1">
              <Radio name="air" value="p1" id="p1" label="Nope" />
            </div>
            <div className="air2">
              <Radio name="air" value="p2" id="p2" label="AirPod 1" />
            </div>
            <div className="air3">
              <Radio name="air" value="p3" id="p3" label="AirPod 2" />
            </div>
            <div className="air4">
              <Radio name="air" value="p4" id="p4" label="AirPod pro" />
            </div>
          </div>
          <div className="soptify-title">Do you use Spotify ?</div>
          <div
            style={{
              gridArea: " 12 / 2 / 14 / 13",
              display: "flex",
              width:'100vw',
              flexWrap: "wrap",
              alignContent: "space-between",
            }}
          >
            <div className="sp1">
              <Radio name="spotify" value="o1" id="o1" label="Nope" />
            </div>
            <div className="sp2">
              <Radio name="spotify" value="o2" id="o2" label="Somethimes" />
            </div>
            <div className="sp3">
              <Radio name="spotify" value="o3" id="o3" label="Chronic" />
            </div>
          </div>

          <div className="pagination-audio">
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "7vh",
                }}
                onClick={() => {
                  props.history.push("/details");
                }}
              >
                Back
              </div>
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "7vh",
                }}
              >
                2/3
              </div>
            </div>
            <Button normal>Next</Button>
          </div>
        </div>
      </Form>
    </Formik>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    crossed: () => dispatch({ type: "CROSSED" }),
  };
};
export default connect(null, mapDispatchToProps)(Audio);
