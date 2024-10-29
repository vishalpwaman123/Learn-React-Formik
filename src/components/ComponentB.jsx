import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const _staticData = [
  {
    firstName: "fname_example1",
    lastName: "lname_example1",
    age: 1,
    comments: "comments_example1",
  },
  {
    firstName: "fname_example2",
    lastName: "lname_example2",
    age: 2,
    comments: "comments_example2",
  },
  {
    firstName: "fname_example3",
    lastName: "lname_example3",
    age: 3,
    comments: "comments_example3",
  },
];

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

function ComponentB() {
  const [newValues, setNewValues] = React.useState({
    firstName: "",
    lastName: "",
    age: 0,
    comments: "",
  });
  console.log("Component B Render");

  const handleEdit = (data) => {
    setNewValues((prevState) => ({
      ...prevState,
      firstName: data.firstName,
      lastName: data.lastName,
      age: data.age,
      comments: data.comments,
    }));
  };

  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="w-50 h-50 bg-light p-5 mt-5">
        <Formik
          initialValues={newValues || initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          validateOnMount
          enableReinitialize
        >
          {(formik) => {
            console.log("Parent Formik : ", formik);
            return (
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
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={!formik.isValid}
                >
                  Submit
                </button>
              </Form>
            );
          }}
        </Formik>
        <div className="mt-3">
          <table className="table">
            <thead className="table-dark">
              <tr>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Age</th>
                <th>comment</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {_staticData.length > 0
                ? _staticData.map((data, index) => {
                    return (
                      <tr key={index}>
                        <td>{data.firstName}</td>
                        <td>{data.lastName}</td>
                        <td>{data.age}</td>
                        <td>{data.comments}</td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-link text-decoration-none"
                            onClick={() => {
                              handleEdit(data);
                            }}
                          >
                            Edit
                          </button>
                        </td>
                      </tr>
                    );
                  })
                : null}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ComponentB;
