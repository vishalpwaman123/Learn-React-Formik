import React from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  FastField,
} from "formik";
import * as Yup from "yup";

const initialValues = {
  firstName: "",
  lastName: "",
  age: 0,
  address: "",
  social: {
    facebook: "",
    instagram: "",
  },
  phoneNumber: ["", ""],
  phNumbers: [""],
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
  address: Yup.string().required("Address is required"),
  social: Yup.object({
    facebook: Yup.string().required("Facebook is required"),
    instagram: Yup.string().required("Instagram is required"),
  }),
  phoneNumber: Yup.array().of(
    Yup.string()
      .required("Phone number is required")
      .min(1, "You must provide two phone numbers")
  ),
});
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
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <FastField name="address">
                {(props) => {
                  const { field, form, meta } = props;
                  console.log("Fast Field");
                  return (
                    <div>
                      <input className="form-control" id="address" {...field} />
                      {form.touched.address && form.errors.address ? (
                        <div className="error">{form.errors.address}</div>
                      ) : null}
                    </div>
                  );
                }}
              </FastField>
            </div>
            <div className="mb-3">
              <label htmlFor="facebook" className="form-label">
                Facebook
              </label>
              <Field
                type="text"
                className="form-control"
                id="facebook"
                name="social.facebook"
              />
              <ErrorMessage
                name="social.facebook"
                component="span"
                className="error"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="instagram" className="form-label">
                Instagram
              </label>
              <Field
                type="text"
                className="form-control"
                id="instagram"
                name="social.instagram"
              />
              <ErrorMessage
                name="social.instagram"
                component="span"
                className="error"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phoneNumber1" className="form-label">
                Phone Number 1
              </label>
              <Field
                type="text"
                className="form-control"
                id="phoneNumber1"
                name="phoneNumber[0]"
              />
              <ErrorMessage
                name="phoneNumber[0]"
                component="span"
                className="error"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phoneNumber2" className="form-label">
                Phone Number 2
              </label>
              <Field
                type="text"
                className="form-control"
                id="phoneNumber2"
                name="phoneNumber[1]"
              />
              <ErrorMessage
                name="phoneNumber[1]"
                component="span"
                className="error"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">List of phone numbers</label>
              <FieldArray name="phNumbers">
                {(fieldArrayProps) => {
                  console.log("Field Array Props : ");
                  const { push, remove, form } = fieldArrayProps;
                  const { values } = form;
                  const { phNumbers } = values;
                  return (
                    <div>
                      {phNumbers.map((phNumber, index) => (
                        <div key={index}>
                          <Field
                            name={`phNumbers[${index}]`}
                            className="mb-1"
                          />
                          {index > 0 && (
                            <button type="button" onClick={() => remove(index)}>
                              &nbsp;-&nbsp;
                            </button>
                          )}
                          <button type="button" onClick={() => push("")}>
                            +
                          </button>
                        </div>
                      ))}
                    </div>
                  );
                }}
              </FieldArray>
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
