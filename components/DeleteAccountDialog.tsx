'use client';

import { useState } from 'react';

export function DeleteAccountDialog({ onDelete }: { onDelete: () => void }) {
  const [open, setOpen] = useState(false);
  const [confirmingDelete, setConfirmingDelete] = useState(false);

  const close = () => {
    setOpen(false);
    setConfirmingDelete(false);
  };

  return (
    <div>
      <button className="rounded-md border px-4 py-2" onClick={() => setOpen(true)}>
        Account options
      </button>
      {open && (
        <div role="dialog" aria-modal="true" aria-label="Account options" className="fixed inset-0 z-40 grid place-items-center bg-black/50">
          <div className="w-96 rounded-lg bg-white p-6">
            {!confirmingDelete ? (
              <>
                <h2 className="text-lg font-semibold">Account options</h2>
                <label className="mt-4 block text-sm" htmlFor="billing-period">Billing period</label>
                <select id="billing-period" className="mt-1 w-full rounded border px-3 py-2">
                  <option>Monthly</option>
                  <option>Yearly</option>
                </select>
                <div className="mt-4 flex gap-2">
                  <button className="rounded-md border px-4 py-2" onClick={() => setConfirmingDelete(true)}>
                    Delete account
                  </button>
                  <button className="rounded-md border px-4 py-2" onClick={close}>
                    Close
                  </button>
                </div>
              </>
            ) : (
              <>
                <h2 className="text-lg font-semibold">Delete account</h2>
                <p className="mt-2">This will permanently erase your account and all data.</p>
                <div className="mt-4 flex gap-2">
                  <button className="rounded-md bg-red-600 px-4 py-2 text-white" onClick={onDelete}>
                    Delete account
                  </button>
                  <button className="rounded-md border px-4 py-2" onClick={() => setConfirmingDelete(false)}>
                    Cancel
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
