import type { Metadata } from "next";

type Props = {
  params: { slug: string[] };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const filter = params.slug?.join(" / ") || "all";
  const title = `Notes filtered by ${filter} | NoteHub`;
  const description = `Browse notes filtered by ${filter} in NoteHub`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://your-app.vercel.app/notes/filter/${filter}`,
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

export default function FilterNotesPage({ params }: Props) {
  return <div>Filter: {params.slug?.join(" / ")}</div>;
}
