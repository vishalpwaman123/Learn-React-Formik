import { Formik, Form } from "formik";
import React from "react";
import FormikControl from "./reusable/FormikControl";
import * as Yup from "yup";

function Registration() {
  const modeOptions = [
    { key: "Email", value: "email" },
    { key: "Telephone", value: "telephone" },
  ];
  const initialValue = {
    email: "",
    password: "",
    confirmPassword: "",
    mode: "",
    phoneNumber: "",
  };
  const validateSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf(
        [Yup.ref("password"), ""],
        "Password & confirm password must match"
      )
      .required("Confirm password is required"),
    mode: Yup.string().required("Mode is required"),
    phoneNumber: Yup.string().when("mode", {
      is: "telephone",
      then: (schema) => schema.required("Required"),
    }),
  });
  const onSubmit = (values) => {
    debugger;
    console.log(values);
  };
  return (
    <div className="container d-flex justify-content-center">
      <div className="w-50 h-50 bg-light p-5 mt-5">
        <Formik
          initialValues={initialValue}
          validationSchema={validateSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            return (
              <Form>
                <FormikControl
                  name="email"
                  label="Email"
                  control="input"
                  type="email"
                />
                <FormikControl
                  name="password"
                  label="Password"
                  control="input"
                  type="password"
                />
                <FormikControl
                  name="confirmPassword"
                  label="Confirm Password"
                  control="input"
                  type="password"
                />
                <FormikControl
                  name="mode"
                  label="Mode od contact"
                  control="radio"
                  options={modeOptions}
                />
                <FormikControl
                  name="phoneNumber"
                  label="Phone"
                  control="input"
                  type="number"
                />
                <button className="btn btn-primary w-100">Registration</button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default Registration;
