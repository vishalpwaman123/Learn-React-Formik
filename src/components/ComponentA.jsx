import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  firstName: "",
  lastName: "",
  age: 0,
};
const onSubmit = (value) => {
  console.log(value);
};
// const validate = (values) => {
//   let errors = {};
//   if (!values.firstName) errors.firstName = "Required";
//   if (!values.lastName) errors.lastName = "Required";
//   if (values.age <= 0) errors.age = "Required";
//   return errors;
// };
const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  age: Yup.number()
    .positive("Age must b greater than 0")
    .required("Age is required"),
});
function ComponentA() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  console.log(formik.touched);

  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="w-50 h-50 bg-light p-5 mt-5">
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              // value={formik.values.firstName}
              {...formik.getFieldProps("firstName")}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className="error">{formik.errors.firstName}</div>
            ) : null}
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              // value={formik.values.lastName}
              {...formik.getFieldProps("lastName")}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div className="error">{formik.errors.lastName}</div>
            ) : null}
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input
              type="number"
              className="form-control"
              id="age"
              name="age"
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              // value={formik.values.age}
              {...formik.getFieldProps("age")}
            />
            {formik.touched.age && formik.errors.age ? (
              <div className="error">{formik.errors.age}</div>
            ) : null}
          </div>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ComponentA;
