import { ErrorMessage, Field } from "formik";
import React from "react";

function Select(props) {
  const { name, label, options, ...rest } = props;
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <Field
        as="select"
        className="form-control"
        id={name}
        name={name}
        {...rest}
      >
        {options.map((option) => {
          return (
            <option key={option.key} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </Field>
      <ErrorMessage name={name} component="span" className="error" />
    </div>
  );
}

export default Select;
