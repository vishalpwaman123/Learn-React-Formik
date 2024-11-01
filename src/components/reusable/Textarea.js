import { ErrorMessage, Field } from "formik";
import React from "react";

function Textarea(props) {
  const { label, name, ...rest } = props;
  return (
    <div className="mb-3">
      <label className="form-label" htmlFor={name}>
        {label}
      </label>
      <Field
        as="textarea"
        className="form-control"
        id={name}
        name={name}
        {...rest}
      />
      <ErrorMessage name={name} component="span" className="error" />
    </div>
  );
}

export default Textarea;
