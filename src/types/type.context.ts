export interface StateType {
  // variables
  darkMode: boolean;
}
// Define the action types
export enum ActionType {
  darkMode_on = "darkmode_on",
  darkMode_off = "darkmode_off",
  toggle_darkMode = "toggle_darkmode",
}
// Actions
export type Action =
  | {
      type: ActionType.toggle_darkMode;
    }
  | { type: ActionType.darkMode_on }
  | { type: ActionType.darkMode_off };
