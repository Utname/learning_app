import React, { useContext } from "react";
import { AppContext } from "../../Context/AppContext";

export default function UserInformation() {
  const { userData } = useContext(AppContext);
  return (
    <div>
      <h5>User Information</h5>
      <p>{userData.first_name}</p>
      <p>{userData.last_name}</p>
      <p>{userData.email}</p>
    </div>
  );
}
