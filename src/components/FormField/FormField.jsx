import { useFormContext } from "../../context/FormContext.jsx";
import { TextInput, Select, Checkbox } from '../Inputs/index.js';

export const FormField = ({field}) => {
  const {name, type, required, options, placeholder} = field;
  const { formData, handleChange, handleBlur, errors } = useFormContext();
  const value = formData[name];

  const commonProps = {
    name,
    type,
    onChange: handleChange,
    onBlur: handleBlur,
    required: required,
    placeholder: placeholder,
  };

  return (
    <>
      {type === "text" || type === "number" ? (
        <TextInput {...commonProps}/>
      ) : type === "select" ? (
        <Select {...commonProps} options={options} />
      ) : type === "checkbox" ? (
        <Checkbox {...commonProps} checked={value} />
      ) : null}

      {errors[name] && <span className="error">This field is required</span>}
    </>
  );
}
