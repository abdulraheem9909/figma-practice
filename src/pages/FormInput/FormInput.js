import React from "react";
import "./FormInput.css";
import cross from "../../assets/cross.svg";
import Select from "../../components/FormikForm/select";
import Input from "../../components/FormikForm/text";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const FormInput = () => {
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
          // lastName: Yup.string()
          //   .max(20, "Must be 20 characters or less")
          //   .required("Required"),
          // email: Yup.string()
          //   .email("Invalid email address")
          //   .required("Required"),
          // selectRadio: Yup.string().required("Required"),

          // jobType: Yup.string()
          //   .oneOf(
          //     ["designer", "development", "product", "other"],
          //     "Invalid Job Type"
          //   )
          //   .required("Required"),

          // acceptedTerms: Yup.boolean()
          //   .required("Required")
          //   .oneOf([true], "You must accept the terms and conditions.")
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <div className="grid-container">
            <div className="nav"></div>
            <div className="icon">
              <div className="cross">
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
              Your ears will love you. Complete the Details below:
            </div>

            <div className="nickname">
              <Input name="nickName" type="text" label="Nickname" />
            </div>
            <div className="username">
              <Input name="userName" type="text" label="Username" />
            </div>
            <div className="code">
              <Select label="Phone " name="code" />
            </div>
            <div className="phone">
              <Input name="phone" type="tel" label="Number" />
            </div>

            <div className="pagination">
              <div>Back</div>
              <div>1/3</div>
              <button>Next</button>
            </div>
          </div>
        </Form>
      </Formik>
    </React.Fragment>
  );
};

export default FormInput;
