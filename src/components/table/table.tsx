import { IUser } from "../../models/user";
import Loader from "../assets/loader";
import TextBox from "../text-box/text-box";
import TableRow from "./table-row";

type Props = {
  data: IUser[] | undefined;
  loading: boolean;
  onUserClick: (user: IUser) => void;
};

function AppTable({ data, loading, onUserClick }: Props) {
  const tableHeaders = [
    "Full name",
    "Email adress",
    "Phone #",
    "Gender",
    "City",
    "Date of birth",
    "Nationality",
  ];
  return loading || !data ? (
    <div className="loader-container">
      <Loader />
    </div>
  ) : (
    <>
      <div style={{ display: "flex" }}>
        <div style={{ width: "12.5%" }}></div>
        {tableHeaders.map((title) => (
          <div key={title} className="table-data-box">
            <TextBox text={title} />
          </div>
        ))}
      </div>
      {data?.map((user) => (
        <TableRow key={user.id.value} onUserClick={onUserClick} user={user} />
      ))}
    </>
  );
}

export default AppTable;
