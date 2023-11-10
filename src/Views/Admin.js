import React, { useState } from "react";
import { Authentication } from "../components/Authentication";
import { AdminAccess } from "../components/AdminAccess";

export const Admin = () => {
  const [authenticated, setAuthenticated] = useState(false);

  if (!authenticated) {
    return <Authentication setAuthenticated={setAuthenticated} />;
  }

  return <AdminAccess />;
};
