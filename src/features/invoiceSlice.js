import { createSlice } from "@reduxjs/toolkit";

const load = () => {
  try {
    const data = localStorage.getItem("invoices");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};
const save = (state) => {
  try {
    localStorage.setItem("invoices", JSON.stringify(state));
  } catch {}
};

const slice = createSlice({
  name: "invoices",
  initialState: load(),
  reducers: {
    addInvoice: (state, { payload }) => {
      state.push(payload);
      save(state);
    },
    updateInvoice: (state, { payload }) => {
      const idx = state.findIndex((i) => i.id === payload.id);
      if (idx !== -1) {
        state[idx] = payload;
        save(state);
      }
    },
    deleteInvoice: (state, { payload }) => {
      const next = state.filter((i) => i.id !== payload);
      save(next);
      return next;
    },
  },
});

export const { addInvoice, updateInvoice, deleteInvoice } = slice.actions;
export default slice.reducer;
