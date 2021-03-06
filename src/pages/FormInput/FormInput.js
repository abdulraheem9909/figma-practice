import React from "react";
import "./FormInput.css";
import cross from "../../assets/cross.svg";
import Select from "../../components/FormikForm/select";
import Input from "../../components/FormikForm/text";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Button from "../../components/button/MainButton"
import { connect } from "react-redux";

const FormInput = (props) => {
  const crossed= ()=>{
    props.crossed();
    props.history.push("/");

  }
  return (
    <React.Fragment>
      <Formik
        initialValues={{
          nickName: "",
          userName: "",
          phone: "",
          code: "",
        }}
        validationSchema={Yup.object({
          nickName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          userName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          phone: Yup.number()
            .max(11, "Must be 11 numbers or less")
            .required("Required"),

          code: Yup.string()
            .oneOf(["+92", "+1", "+95", "+004", "+225"], "Invalid Code")
            .required("Required"),
       
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);

          props.history.push("/details/audio");
          
        }}
      >
        <Form>
          <div className="grid-container">
            <div className="nav"></div>
            <div className="title-mob">Felix</div>
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
            <div className="title-form">
              {" "}
              Your ears will love you . Complete the Details below:
            </div>

            <div className="nickname">
              <Input name="nickName" type="text" label="Nickname" />
            </div>
            <div className="username">
              <Input name="userName" type="text" label="Username" />
            </div>
            <div className="code">
              <Select label="Phone " name="code"  />
            </div>
            <div className="phone">
              <Input name="phone" type="tel" label="Number" />
            </div>

            <div className="pagination">
              <div  onClick={crossed}><div style={{display:"flex", justifyContent:"center", alignItems:"center" ,height:"7vh" }}>Back</div></div>
              <div><div style={{display:"flex", justifyContent:"center", alignItems:"center" ,height:"7vh" }}>1/3</div></div>
              <Button normal >Next</Button>
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
    crossed: () => dispatch({ type: "CROSSED" }),
  };
};

export default connect(null,mapDispatchToProps)(FormInput);
