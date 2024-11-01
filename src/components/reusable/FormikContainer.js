import React from "react";
import FormikControl from "./FormikControl";
import { Formik, Form } from "formik";
import * as Yup from "yup";

function FormikContainer() {
  const dropdownOptions = [
    {
      key: "Select an option",
      value: "",
    },
    {
      key: "Option 1",
      value: "option1",
    },
    {
      key: "Option 2",
      value: "option2",
    },
    {
      key: "Option 3",
      value: "option3",
    },
  ];
  const radioOptions = [
    {
      key: "Option 1",
      value: "rOption1",
    },
    {
      key: "Option 2",
      value: "rOption2",
    },
    {
      key: "Option 3",
      value: "rOption3",
    },
  ];
  const checkboxOptions = [
    {
      key: "Option 1",
      value: "cOption1",
    },
    {
      key: "Option 2",
      value: "cOption2",
    },
    {
      key: "Option 3",
      value: "cOption3",
    },
  ];
  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
    radioOption: "rOption1",
    checkboxOption: [],
    date: null,
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    selectOption: Yup.string().required("Required"),
    radioOption: Yup.string().required("Required"),
    checkboxOption: Yup.array().min(1, "Required").required("Required"),
    date: Yup.date().required("Required").nonNullable("Required"),
  });
  const onSubmit = (values) => {
    console.log("Form Data : ", values);
  };
  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="w-50 h-50 bg-light p-5 mt-5">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <Form>
              <FormikControl
                control="input"
                type="email"
                label="Email"
                name="email"
              />
              <FormikControl
                control="textarea"
                type="textarea"
                label="Description"
                name="description"
              />
              <FormikControl
                control="select"
                label="Select a topic"
                name="selectOption"
                options={dropdownOptions}
              />
              <FormikControl
                control="radio"
                label="Radio Topic"
                name="radioOption"
                options={radioOptions}
              />
              <FormikControl
                control="checkbox"
                label="Checkbox Topic"
                name="checkboxOption"
                options={checkboxOptions}
              />
              <FormikControl control="date" label="Birth Date" name="date" />
              <button
                type="submit"
                className="btn btn-primary"
                disabled={formik.touched && !formik.isValid}
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default FormikContainer;
