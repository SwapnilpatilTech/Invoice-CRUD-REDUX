import { configureStore } from "@reduxjs/toolkit";
import invoices from "./features/invoiceSlice";

const store = configureStore({
  reducer: {
    invoices,
  },
});

export default store;
