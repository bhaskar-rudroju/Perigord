import React, { useState } from "react";
import { FormContext } from "../../context/FormContext.jsx";
import { FormField } from "../../components/FormField/index.js";
import './DynamicForm.css';

export const DynamicForm = ({formSchema}) => {
  
    const initialState = formSchema.fields.reduce((acc, field) => {
    acc[field.name] = field.type === "checkbox" ? false : "";
    return acc;
  }, {});


  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    const parsedValue = type === 'checkbox' ? checked : (type === 'number' ? Number(value) : value);
    setFormData((prev) => ({ ...prev, [name]: parsedValue }));
  };

  const handleBlur = (e) => {
    const { name, type, value, checked } = e.target;
    const field = formSchema.fields.find((f) => f.name === name);
    if (!field) return;

    const parsedValue = type === 'checkbox' ? checked : value;
    const hasError = field.required && (
      (type === 'checkbox' && !parsedValue) ||
      (type !== 'checkbox' && parsedValue === '')
    );
    setErrors((prev) => ({ ...prev, [name]: hasError }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    formSchema.fields.forEach((field) => {
      const value = formData[field.name];
      const hasError = field.required && (field.type === "checkbox" ? !value : value === "");
      newErrors[field.name] = hasError;
    });
    setErrors(newErrors);

    const isValid = Object.values(newErrors).every((e) => !e);
    if (isValid) {
      setSubmittedData(formData);
    }
  };

  return (
    <FormContext.Provider value={{ formData, errors, handleChange, handleBlur }}>
      <div className="container">
        <div className="form-section">
          <h2 className="form-title">{formSchema.title}</h2>
          <form className="form" onSubmit={handleSubmit}>
            {formSchema.fields.map((field) => (
              <div className="form-group" key={field.name}>
                <label htmlFor={field.name}>{field.label}  </label>
                <FormField field={field} />
              </div>
            ))}
            <button className="submit-button" type="submit">Submit</button>
          </form>
        </div>

        {submittedData && (
          <div className="data-section">
            <h2>Submitted Data</h2>
            <ul>
              {Object.entries(submittedData).map(([key, value]) => (
                <li key={key}>
                  <strong>{key}:</strong> {value?.toString()}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </FormContext.Provider>
  );
}
