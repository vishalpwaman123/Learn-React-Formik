import { Formik, Form } from "formik";
import React from "react";
import FormikControl from "./reusable/FormikControl";
import * as Yup from "yup";
import { parseISO, format } from "date-fns";

function EnrollmentForm() {
  const dropdownOptions = [
    { key: "Select course", value: "" },
    { key: "Java", value: "java" },
    { key: "C#", value: "c#" },
  ];

  const checkboxOptions = [
    { key: "HTML", value: "html" },
    { key: "CSS", value: "css" },
    { key: "JavaScript", value: "javascript" },
  ];

  const initialValue = {
    email: "",
    bio: "",
    course: "",
    skill: [],
    courseDate: null,
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    bio: Yup.string().required("Required"),
    course: Yup.string().required("Required"),
    skill: Yup.array().min(1, "Min 1 skill is required").required("Required"),
    courseDate: Yup.string().required("Required").nonNullable("Required"),
  });

  const onSubmit = (value) => {
    console.log(JSON.parse(JSON.stringify(value)));
  };

  return (
    <div className="container d-flex justify-content-center">
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
                  name="email"
                  type="email"
                  label="Email"
                  control="input"
                />
                <FormikControl name="bio" label="Bio" control="textarea" />
                <FormikControl
                  name="course"
                  label="Course"
                  control="select"
                  options={dropdownOptions}
                />
                <FormikControl
                  name="skill"
                  label="Skill"
                  control="checkbox"
                  options={checkboxOptions}
                />
                <FormikControl
                  name="courseDate"
                  label="Course Date"
                  control="date"
                />
                <button className="btn btn-primary" type="submit">
                  Submit
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default EnrollmentForm;
