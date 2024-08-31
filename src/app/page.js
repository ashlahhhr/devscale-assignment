import { NoteCreate } from "@/components/notes/note.create";
import { NoteLists } from "@/components/notes/note.lists";
import { Header } from "@/components/header";
export default function Home() {
  return (
    <div className="flex flex-col justify-center">
      <Header />
      <NoteCreate />
      <NoteLists />
    </div>
  );
}
