import type { Metadata } from "next";
import { fetchGetNoteById } from "@/lib/api";


type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const note = await fetchGetNoteById(params.id);

  const title = note ? `${note.title} | NoteHub` : "Note not found | NoteHub";
  const description = note
    ? note.content.slice(0, 150)
    : "The requested note was not found";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://your-app.vercel.app/notes/${params.id}`,
      images: [
        {
          url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function NoteDetailsPage({ params }: Props) {
  const note = await fetchGetNoteById(params.id);
  if (!note) return <div>Note not found</div>;
  return (
    <div>
      <h1>{note.title}</h1>
      <p>{note.content}</p>
    </div>
  );
}
