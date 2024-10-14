import React, { useEffect, useState } from "react";
import { useFetch } from "./hooks/useFetch";

export default function CustomUseHook() {
  const {
    data: users,
    isLoading,
    error,
  } = useFetch("https://reqres.in/api/users");
  if (error) {
    return "Some thing wrong!!!";
  }
  return isLoading ? (
    <p>Loading...</p>
  ) : (
    users.map((user) => (
      <p>
        {user.first_name} {user.last_name}
      </p>
    ))
  );
}
