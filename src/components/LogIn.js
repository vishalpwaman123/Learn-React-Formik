import React from "react";
import * as Yup from "yup";
import FormikControl from "./reusable/FormikControl";
import { Form, Formik } from "formik";

function LogIn() {
  const initialValue = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
    password: Yup.string().email("Invalid email format").required("Required"),
  });
  const onSubmit = (values) => {
    console.log("Submit : ", values);
  };

  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="w-50 h-50 bg-light p-5 mt-5">
        <Formik
          initialValues={initialValue}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            return (
              <Form>
                <FormikControl
                  control="input"
                  type="email"
                  label="Email"
                  name="email"
                />
                <FormikControl
                  control="input"
                  type="password"
                  label="Password"
                  name="password"
                />
                <button
                  className="btn btn-primary"
                  disabled={formik.touched && !formik.isValid}
                >
                  Login
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default LogIn;
