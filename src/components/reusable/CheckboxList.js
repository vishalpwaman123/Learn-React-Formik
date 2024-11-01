import { ErrorMessage, Field } from "formik";
import React from "react";

function CheckboxList(props) {
  const { name, label, options, ...rest } = props;
  return (
    <div className="mb-3 d-flex flex-column">
      <label className="form-label">{label}</label>
      <div className="d-flex">
        <Field name={name} {...rest}>
          {({ field }) => {
            return options.map((option) => {
              return (
                <React.Fragment key={option.value}>
                  <input
                    type="checkbox"
                    id={option.value}
                    {...field}
                    value={option.value}
                    checked={field.value.includes(option.value)}
                  />
                  <label htmlFor={option.value} className="me-2 ms-1">
                    {option.key}
                  </label>
                </React.Fragment>
              );
            });
          }}
        </Field>
      </div>
      <ErrorMessage name={name} component="span" className="error" />
    </div>
  );
}

export default CheckboxList;
