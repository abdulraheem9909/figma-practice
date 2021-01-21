import React from "react";
import Input from "../FormikForm/text";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Radio from "../FormikForm/radio";
import Select from "../FormikForm/select";
import Checkbox from "../FormikForm/checkbox";

// And now we can use these
const SignupForm = () => {
  return (
    <>
      <h1>Subscribe!</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          selectRadio: "",
          acceptedTerms: false, // added for our checkbox
          jobType: "", // added for our select
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          selectRadio: Yup.string().required("Required"),

          jobType: Yup.string()
            .oneOf(
              ["+92", "development", "product", "other"],
              "Invalid Job Type"
            )
            .required("Required"),

          acceptedTerms: Yup.boolean()
            .required("Required")
            .oneOf([true], "You must accept the terms and conditions."),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <Input
            label="First Name"
            name="firstName"
            type="password"
            placeholder="Jane"
          />
          <Input
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Doe"
          />
          <Input
            label="Email Address"
            name="email"
            type="email"
            placeholder="jane@formik.com"
          />
          <Select label="Job Type" name="jobType" />

          <Radio name="selectRadio" value="op1" id="op1" label="Iphone"  />

          <Radio name="selectRadio" value="op2" id="op2" label="Android" />
          <Checkbox name="acceptedTerms">
            I accept the terms and conditions
          </Checkbox>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};
export default SignupForm;
