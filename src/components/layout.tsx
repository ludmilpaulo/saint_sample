"use client";
import React, { useContext, useEffect } from "react";
import storage from "react-secure-storage";
import { ContextStore } from "@/utils/contexts/context-api";
import { getCurrentTheme, loadTheme } from "@/utils/manage-theme";
import { ActionType } from "@/types/type.context";

import "@styles/main.css";
interface Props {
  children: React.ReactNode;
}
const Layout = ({ children }: Props) => {
  const { dispatch } = useContext(ContextStore);
  useEffect(() => {
    const mode = storage.getItem("darkMode");
    if (mode && mode === "on") {
      dispatch({ type: ActionType.darkMode_on });
    } else {
      dispatch({ type: ActionType.darkMode_off });
    }
    loadTheme(getCurrentTheme());
  }, [dispatch]);
  return <body>{children}</body>;
};

export default Layout;
