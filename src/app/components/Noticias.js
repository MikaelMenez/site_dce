"use client"; // Esse componente é um componente client-side

import { useEffect, useState } from "react";

export default function Noticias() {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    // Buscar as notícias da API
    const fetchNoticias = async () => {
      try {
        const response = await fetch("/api/noticias");
        const data = await response.json();
        setNoticias(data);
      } catch (error) {
        console.error("Erro ao carregar notícias:", error);
      }
    };

    fetchNoticias();
  }, []);

  return (
    <section id="noticias" className="noticias-section">
      <h2>Últimas Notícias</h2>
      <ul>
        {noticias.map((noticia, index) => (
          <li key={index} className="noticia-item">
            {noticia.imagem && (
              <img
                src={noticia.imagem}
                alt={`Imagem de ${noticia.titulo}`}
                className="noticia-imagem"
              />
            )}
            <div className="noticia-conteudo">
              <a href={noticia.link} target="_blank" rel="noopener noreferrer">
                <h3>{noticia.titulo}</h3>
              </a>
              <p>
                <strong>Publicado:</strong> {noticia.data} às {noticia.hora}
              </p>
              <p>
                <strong>Autor:</strong> {noticia.autor}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .noticias-section {
          padding: 20px;
          background: #f9f9f9;
          border-top: 1px solid #ddd;
        }
        ul {
          list-style: none;
          padding: 0;
        }
        .noticia-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 20px;
          border-bottom: 1px solid #eee;
          padding-bottom: 20px;
        }
        .noticia-imagem {
          width: 100px;
          height: 100px;
          object-fit: cover;
          margin-right: 15px;
          border-radius: 8px;
        }
        .noticia-conteudo {
          flex: 1;
        }
        h3 {
          margin: 0 0 5px;
        }
        p {
          margin: 0;
          color: #555;
        }
      `}</style>
    </section>
  );
}
