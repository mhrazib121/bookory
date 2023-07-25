import { Link } from "react-router-dom";
import { IProfileResponse } from "../types/Auth";

const ProfileDropdown = ({ data }: { data: IProfileResponse }) => {
  return (
    <div className="absolute -left-20 mt-2 mr-2 w-[150px]">
      <ul className=" p-3 bg-white shadow-md rounded-md">
        <Link to="/">
          <li className="p-1 font-medium">
            {data.data.getProfile.name.firstName +
              " " +
              data.data.getProfile.name.lastName}
          </li>
        </Link>
        <Link to="/">
          <li className="p-1">Profile</li>
        </Link>
        <Link to="/">
          <li className="p-1">Logout</li>
        </Link>
      </ul>
    </div>
  );
};

export default ProfileDropdown;
