import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteInvoice } from "../features/invoiceSlice";

export default function InvoiceList({ setEditInvoice }) {
  const invoices = useSelector((s) => s.invoices);
  const dispatch = useDispatch();

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h2 className="text-xl font-semibold mb-2">Invoices</h2>
      {invoices.length === 0 ? (
        <p className="text-gray-500">No invoices yet.</p>
      ) : (
        <ul className="space-y-2">
          {invoices.map((inv) => (
            <li
              key={inv.id}
              className="flex items-center justify-between border rounded-lg px-3 py-2"
            >
              <div>
                <div className="font-medium">{inv.client}</div>
                <div className="text-sm text-gray-600">Amount: ₹{inv.amount}</div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setEditInvoice(inv)}
                  className="px-3 py-1 rounded bg-yellow-500 text-white"
                >
                  Edit
                </button>
                <button
                  onClick={() => dispatch(deleteInvoice(inv.id))}
                  className="px-3 py-1 rounded bg-red-600 text-white"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
