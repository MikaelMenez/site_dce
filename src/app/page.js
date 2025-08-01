"use client";

import InstagramFeed from "./components/InstagramFeed";

export default function Home() {
  return (
    <>
    <title>Site do DCE UFPB</title>
    <meta name="description" content="Este é o site do DCE da UFPB"></meta>
      <section className="relative bg-sky-500 text-white">
        <div className="container mx-auto text-center py-80 px-6">
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10">
            <h2 className="text-5xl font-extrabold mb-6 leading-tight">
              Bem-vindo ao Diretório Central dos Estudantes
            </h2>
            <p className="text-2xl mb-8 max-w-2xl mx-auto">
              Representando e defendendo os interesses dos estudantes!
            </p>
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

      {/* Instagram Feed Section */}
      <InstagramFeed />
    </>
  );
}
