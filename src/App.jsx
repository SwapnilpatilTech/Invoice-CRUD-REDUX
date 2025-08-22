import React, { useState } from "react";
import InvoiceForm from "./components/InvoiceForm";
import InvoiceList from "./components/InvoiceList";

export default function App() {
  const [editInvoice, setEditInvoice] = useState(null);

  return (
    <div className="min-h-screen p-6">
      <header className="max-w-4xl mx-auto mb-6">
        <h1 className="text-3xl font-bold">Invoice Generator</h1>
        <p className="text-sm text-gray-600"></p>
      </header>

      <main className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
        <InvoiceForm editInvoice={editInvoice} setEditInvoice={setEditInvoice} />
        <InvoiceList setEditInvoice={setEditInvoice} />
      </main>

      <footer className="max-w-4xl mx-auto text-xs text-gray-500 mt-8">
   
      </footer>
    </div>
  );
}
