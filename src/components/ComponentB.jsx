import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  firstName: "",
  lastName: "",
  age: 0,
  comments: "",
};
const onSubmit = (value) => {
  console.log(value);
};

const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  age: Yup.number()
    .positive("Age must b greater than 0")
    .required("Age is required"),
});

const validateComments = (value) => {
  let error;
  if (!value) error = "Comment is required";
  return error;
};

function ComponentB() {
  console.log("Component B Render");

  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="w-50 h-50 bg-light p-5 mt-5">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <Field
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
              />
              <ErrorMessage
                name="firstName"
                component="span"
                className="error"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <Field
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
              />
              <ErrorMessage
                name="lastName"
                component="span"
                className="error"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="age" className="form-label">
                Age
              </label>
              <Field
                type="number"
                className="form-control"
                id="age"
                name="age"
              />
              <ErrorMessage name="age" component="span" className="error" />
            </div>
            <div className="mb-3">
              <label htmlFor="comments" className="form-label">
                Comments
              </label>
              <Field
                as="textarea"
                className="form-control"
                id="comments"
                name="comments"
                validate={validateComments}
              />
              <ErrorMessage
                name="comments"
                component="span"
                className="error"
              />
            </div>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default ComponentB;
