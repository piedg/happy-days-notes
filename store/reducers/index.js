import { combineReducers } from "redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer } from "redux-persist";
import notes from "./notes";

const rootPersistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  notes,
});

export default persistReducer(rootPersistConfig, rootReducer);
