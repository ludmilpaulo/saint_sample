import storage from "react-secure-storage";
import { Action, ActionType, StateType } from "@/types/type.context";

export const storeReducer = (state: StateType, action: Action): StateType => {
  switch (action.type) {
    case ActionType.toggle_darkMode: {
      const { darkMode } = state;
      storage.setItem("darkMode", darkMode ? "off" : "on");
      return { ...state, darkMode: !darkMode };
    }
    case ActionType.darkMode_off: {
      storage.setItem("darkMode", "off");
      return { ...state, darkMode: false };
    }
    case ActionType.darkMode_on: {
      storage.setItem("darkMode", "on");
      return { ...state, darkMode: true };
    }
    default:
      return state;
  }
};
