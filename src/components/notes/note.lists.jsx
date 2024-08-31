"use client";
import { useAtomValue } from "jotai";
import React from "react";
import { notesAtom } from "./note.atom";

export const NoteLists = () => {
  const notes = useAtomValue(notesAtom);

  return (
    <div>
      <h1>My Notes: </h1>
      <div className="rounded-2xl border bg-white p-8 text-slate-800">
        {notes.map((item) => {
          return <div key={item}>{item}</div>;
        })}
      </div>
    </div>
  );
};
