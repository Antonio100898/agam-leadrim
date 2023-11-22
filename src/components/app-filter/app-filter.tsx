import AppButton from "../button/button";
import AppSelect from "../select/select";

type Props = {
  filter: 0 | string;
  handleFilterChange: React.ChangeEventHandler<HTMLSelectElement>;
  nationalities: string[];
  onFilterClick: () => void;
};

function AppFilter({
  filter,
  handleFilterChange,
  nationalities,
  onFilterClick,
}: Props) {
  return (
    <div className="filter-wrapper">
      <AppSelect
        value={filter}
        handleChange={handleFilterChange}
        data={nationalities}
      />
      <AppButton
        onClick={onFilterClick}
        backgroundColor="#a2c8f2"
        borderColor="#71adf0"
        paddingX="30px"
      >
        Filter
      </AppButton>
    </div>
  );
}

export default AppFilter;
