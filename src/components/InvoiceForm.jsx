import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addInvoice, updateInvoice } from "../features/invoiceSlice";

export default function InvoiceForm({ editInvoice, setEditInvoice }) {
  const dispatch = useDispatch();
  const [client, setClient] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    if (editInvoice) {
      setClient(editInvoice.client);
      setAmount(editInvoice.amount);
    }
  }, [editInvoice]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!client || !amount) return;

    const payload = {
      id: editInvoice ? editInvoice.id : Date.now(),
      client: client.trim(),
      amount: Number(amount),
    };

    if (editInvoice) {
      dispatch(updateInvoice(payload));
      setEditInvoice(null);
    } else {
      dispatch(addInvoice(payload));
    }

    setClient("");
    setAmount("");
  };

  const onCancel = () => {
    setEditInvoice(null);
    setClient("");
    setAmount("");
  };

  return (
    <form onSubmit={onSubmit} className="bg-white rounded-xl shadow p-4 space-y-3">
      <h2 className="text-xl font-semibold">{editInvoice ? "Edit Invoice" : "Add Invoice"}</h2>
      <input
        className="w-full border rounded-lg px-3 py-2"
        placeholder="Client Name"
        value={client}
        onChange={(e) => setClient(e.target.value)}
      />
      <input
        className="w-full border rounded-lg px-3 py-2"
        placeholder="Amount (₹)"
        type="number"
        min="0"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <div className="flex gap-2">
        <button type="submit" className="px-4 py-2 rounded-lg bg-blue-600 text-white">
          {editInvoice ? "Update" : "Save"}
        </button>
        {editInvoice && (
          <button type="button" onClick={onCancel} className="px-4 py-2 rounded-lg border">
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
