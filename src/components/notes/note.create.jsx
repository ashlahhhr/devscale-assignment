"use client";

import React, { useState } from "react";
import { notesAtom } from "./note.atom";
import { useAtom } from "jotai";

export const NoteCreate = () => {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useAtom(notesAtom);

  function handleAddNote() {
    setNotes([...notes, note]);
  }

  return (
    <div>
      <textarea
        className="rounded-2xl border bg-white p-8 text-slate-900"
        onChange={(e) => setNote(e.target.value)}
      ></textarea>
      <button
        className="font-semibold disabled:opacity-50 border block rounded-lg transition duration-150 bg-indigo-700 border-indigo-700 text-white hover:bg-indigo-60 hover:border-indigo-600 py-1.5 px-2 text-xs"
        onClick={handleAddNote}
      >
        save
      </button>
    </div>
  );
};
