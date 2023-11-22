import { IUser } from "../../models/user";
import Avatar from "../avatar/avatar";
import AppButton from "../button/button";
import TextBox from "../text-box/text-box";

type Props = {
  open: boolean;
  onClose: () => void;
  selectedUser: IUser;
};

function UserModal({ onClose, open, selectedUser }: Props) {
  const { email, name, phone, gender, location, nat, picture, dob } =
    selectedUser;

  const userProps = [email, phone, gender, nat, location.city, dob.date];

  return (
    <div className={`modal-wrapper ${open ? "visible" : "hidden"}`}>
      <div className="modal-box">
        <div className="modal-close-button">
          <AppButton onClick={onClose} paddingX="20px">
            X
          </AppButton>
        </div>
        <div className="modal-avatar-wrapper">
          <Avatar size="200px" src={picture.large} />
          <TextBox style={{fontSize: "22px", padding: "10px 50px"}} text={name.first + " " + name.last} />
        </div>
        <div className="modal-description">
          {userProps?.map((prop) => (
            <TextBox style={{padding: "5px 5px", width: "25%"}} text={prop} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserModal;
