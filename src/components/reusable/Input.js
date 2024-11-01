import React from "react";
import { Field, ErrorMessage } from "formik";

function Input(props) {
  const { label, name, ...rest } = props;
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <Field id={name} name={name} {...rest} className="form-control" />
      <ErrorMessage name={name} component="span" className="error" />
    </div>
  );
}

export default Input;
