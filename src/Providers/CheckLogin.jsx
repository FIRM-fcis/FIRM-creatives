import React, { useContext } from "react";
import { AppContext } from "./AppProvider";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import { Navigate } from "react-router-dom";

function CheckLogin({ children }) {
  const { information } = useContext(AppContext);
  if (information.username !== "") return { children };
  return <Navigate to={"/nothing"} />;
}

export default CheckLogin;
