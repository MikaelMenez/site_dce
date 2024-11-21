"use client";

import { useEffect, useState } from "react";
export const metadata: Metadata={
title:"Portal DCE UFPB"
}
export default function Home() {
  const [noticias, setNoticias] = useState([]);

  // Buscar notícias da API
  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const response = await fetch("/api/noticias");
        const data = await response.json();
        setNoticias(data.slice(0, 4)); // Limitar a 4 notícias
      } catch (error) {
        console.error("Erro ao carregar notícias:", error);
      }
    };

    fetchNoticias();
  }, []);

  return (
    <>
      <section className="relative bg-sky-500 text-white">
        <div className="container mx-auto text-center py-80 px-6">
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10">
            <h2 className="text-5xl font-extrabold mb-6 leading-tight">
              Bem-vindo ao Diretório Central dos Estudantes
            </h2>
            <p className="text-2xl mb-8 max-w-2xl mx-auto">
              Representando e defendendo os interesses dos estudantes!
            </p>
            <div className="mt-6">
              <button className="bg-white text-sky-700 font-semibold px-8 py-3 rounded-full shadow hover:bg-gray-200 transition">
                Saiba Mais
              </button>
            </div>
          </div>
          <div className="absolute inset-0 opacity-80">
            <img
              src="/images/panel.png"
              alt="Imagem de fundo do DCE"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-sky-500 to-transparent"></div>
      </section>

      <section className="py-6 sm:py-12 dark:bg-sky-500 dark:text-gray-800">
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold">Notícias</h2>
            <a href="#">
              <p
                className="font-serif text-sm dark:text-gray-600"
                style={{ textDecorationLine: "underline" }}
              >
                ver mais
              </p>
            </a>
          </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            {noticias.map((noticia, index) => (
              <article key={index} className="flex flex-col dark:bg-gray-50">
                <a
                  rel="noopener noreferrer"
                  href={noticia.link}
                  aria-label={noticia.titulo}
                  target="_blank"
                >
                  <img
                    alt={`Imagem de ${noticia.titulo}`}
                    className="object-cover w-full h-52 dark:bg-gray-500"
                    src={noticia.imagem || "/images/PRAPE.png"} // Usando imagem padrão se não houver imagem
                  />
                </a>
                <div className="flex flex-col flex-1 p-6">
                  <a
                    rel="noopener noreferrer"
                    href={noticia.link}
                    className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600"
                    target="_blank"
                  >
                    {noticia.autor || "Autor Desconhecido"}
                  </a>
                  <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                    {noticia.titulo}
                  </h3>
                  <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                    <span>{noticia.data || "Data não disponível"}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
