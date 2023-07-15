import { configureStore } from "@reduxjs/toolkit";
import AddBookReducer from "../redux/Fetaures/AddNewBook/addNewBookSlice";
const store = configureStore({
  reducer: {
    addBook: AddBookReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
