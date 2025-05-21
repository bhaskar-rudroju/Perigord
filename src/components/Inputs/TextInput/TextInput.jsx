export const TextInput = ({ name, type, value, onChange, onBlur, required, placeholder }) => {
  return (
    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      required={required}
    />
  );
}
