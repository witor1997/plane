import { readFile, readdir } from "fs/promises";
import path from "path";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MexicoCarousel from "@/app/melhor/mexico/MexicoCarousel";

export const dynamic = "force-static";

type Artigo = {
  slug: string;
  titulo: string;
  autor: string;
  dataPublicacao: string;
  conteudo: string;
};

type Props = {
  params: Promise<{ slug: string }>;
};

type MetadataProps = {
  params: Promise<{ slug: string }>;
};

async function getArtigos() {
  const filePath = path.join(process.cwd(), "src", "data", "artigos.json");
  const fileContents = await readFile(filePath, "utf8");

  return JSON.parse(fileContents) as Artigo[];
}
const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"]);

async function getDestinationImages(slug: string) {
  const folderPath = path.join(process.cwd(), "public", slug);
  let files: string[];

  try {
    files = await readdir(folderPath);
  } catch {
    return [];
  }

  return files
    .filter((fileName) => imageExtensions.has(path.extname(fileName).toLowerCase()))
    .sort((first, second) => first.localeCompare(second, "pt-BR", { numeric: true }))
    .map((fileName) => `/${slug}/${fileName}`);
}

export async function generateStaticParams() {
  const artigos = await getArtigos();

  return artigos.map((artigo) => ({
    slug: artigo.slug,
  }));
}

export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
  const { slug } = await params;
  const artigos = await getArtigos();
  const artigo = artigos.find((item) => item.slug === slug);

  if (!artigo) {
    return {
      title: "Artigo não encontrado",
    };
  }

  return {
    title: `${artigo.titulo} | Tourist BH`,
    description: artigo.conteudo,
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const artigos = await getArtigos();
  const artigo = artigos.find((item) => item.slug === slug);

  if (!artigo) {
    notFound();
  }

  const images = await getDestinationImages(slug);

  return (
    <main>
      <h1>{artigo.titulo}</h1>
      {images.length > 0 ? <MexicoCarousel images={images} title={artigo.titulo} /> : null}
      <p>{artigo.autor}</p>
      <p>{artigo.dataPublicacao}</p>
      <p>{artigo.conteudo}</p>
    </main>
  );
}
