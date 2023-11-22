type Props = {
  data: string[];
  handleChange: React.ChangeEventHandler<HTMLSelectElement>;
  value: 0 | string;
};

function AppSelect({ data, handleChange, value }: Props) {
  return (
    <select
      value={value}
      onChange={(e) => handleChange(e)}
      className="app-select"
    >
      <option disabled value={0}>
        Nationality
      </option>
      {data.map((nat) => (
        <option key={nat} value={nat}>
          {nat}
        </option>
      ))}
    </select>
  );
}

export default AppSelect;
