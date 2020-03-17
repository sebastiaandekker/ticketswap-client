import { combineReducers } from "redux";
import user from "./user/reducer";
import events from "./events/reducer";
import event from "./event/reducer";

export default combineReducers({ user, events, event });
