import { IUser } from "../../models/user";
import Avatar from "../avatar/avatar";
import TextBox from "../text-box/text-box";

type Props = {
  user: IUser;
  onUserClick: (user: IUser) => void;
};

function TableRow(props: Props) {
  const { onUserClick, user } = props;
  const { email, name, phone, gender, location, nat, picture, dob } = user;

  const userProps = [
    name?.first + " " + name?.last,
    email,
    phone,
    gender,
    location.city,
    dob.date,
    nat,
  ];

  return (
    <div onClick={() => onUserClick(user)} className="table-row">
      <div className="avatar-container" style={{ width: "12.5%" }}>
        <Avatar size="65px" src={picture.medium} />
      </div>
      {userProps?.map((prop) => (
        <div key={prop} className="table-data-box">
          <TextBox style={{height: "50px"}} text={prop} />
        </div>
      ))}
    </div>
  );
}

export default TableRow;
