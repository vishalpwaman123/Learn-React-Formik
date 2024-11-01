import React from "react";
import { Formik, ErrorMessage, Field } from "formik";
import DateView from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DatePicker(props) {
  const { label, name, ...rest } = props;
  return (
    <div className="mb-3">
      <div className="d-flex flex-column">
        <label className="form-label" htmlFor={name}>
          {label}
        </label>
        <Field name={name}>
          {({ form, field }) => {
            const { setFieldValue } = form;
            const { value } = field;
            return (
              <DateView
                id={name}
                {...field}
                selected={value}
                onChange={(val) => setFieldValue(name, val)}
                className="form-control"
              />
            );
          }}
        </Field>
        <ErrorMessage name={name} component="span" className="error" />
      </div>
    </div>
  );
}

export default DatePicker;
