'use client';

import { useState } from 'react';

export function DeleteAccountDialog({ onDelete }: { onDelete: () => void }) {
  const [open, setOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);

  return (
    <div>
      <button className="rounded-md border px-4 py-2" onClick={() => setOpen(true)}>
        Account options
      </button>
      {open && (
        <div className="fixed inset-0 z-40 grid place-items-center bg-black/50">
          <div className="w-96 rounded-lg bg-white p-6">
            <h2 className="text-lg font-semibold">Account options</h2>
            <label className="mt-4 block text-sm">Billing period</label>
            <select className="mt-1 w-full rounded border px-3 py-2">
              <option>Monthly</option>
              <option>Yearly</option>
            </select>
            <button
              className="mt-4 rounded-md border px-4 py-2"
              onClick={() => setConfirmOpen(true)}
            >
              Delete account
            </button>
            {confirmOpen && (
              <div className="fixed inset-0 z-50 grid place-items-center bg-black/60">
                <div className="w-80 rounded-lg bg-white p-6">
                  <p>This will permanently erase your account and all data.</p>
                  <div className="mt-4 flex gap-2">
                    <button className="rounded-md bg-gray-900 px-4 py-2 text-white" onClick={onDelete}>
                      OK
                    </button>
                    <button className="rounded-md border px-4 py-2" onClick={() => setConfirmOpen(false)}>
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
