export const Select = ({ name, value, onChange, required, options }) => {
  return (
    <select name={name} id={name} value={value} onChange={onChange} required={required}>
      <option value="">Select an option</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
  );
}
