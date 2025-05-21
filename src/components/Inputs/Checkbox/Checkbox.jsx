export const Checkbox = ({ name, checked, onChange }) => {
  return (
    <input
      type="checkbox"
      name={name}
      checked={checked}
      onChange={onChange}
    />
  );
}
