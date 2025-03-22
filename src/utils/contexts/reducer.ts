import storage from "react-secure-storage";
import { Action, ActionType, StateType } from "@/types/type.context";
import { loadTheme } from "../manage-theme";

export const storeReducer = (state: StateType, action: Action): StateType => {
  switch (action.type) {
    case ActionType.toggle_darkMode: {
      const { darkMode } = state;
      storage.setItem("darkMode", darkMode ? "off" : "on");
      loadTheme(darkMode ? "light" : "dark");
      return { ...state, darkMode: !darkMode };
    }
    case ActionType.darkMode_off: {
      storage.setItem("darkMode", "off");
      loadTheme("light");
      return { ...state, darkMode: false };
    }
    case ActionType.darkMode_on: {
      storage.setItem("darkMode", "on");
      loadTheme("dark");
      return { ...state, darkMode: true };
    }
    default:
      return state;
  }
};
