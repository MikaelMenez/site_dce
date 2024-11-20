const axios = require("axios");
const cheerio = require("cheerio");

const PRAPE_URL = "https://www.ufpb.br/prape/colecoes/ultimas-noticias";

export async function GET() {
  try {
    // Fazer a requisição à página da PRAPE
    const { data: html } = await axios.get(PRAPE_URL);
    const $ = cheerio.load(html);

    // Array para armazenar as notícias extraídas
    const noticias = [];

    // Selecionar os artigos de notícias
    $("article.tileItem").each((index, element) => {
      const titulo = $(element).find("h2.tileHeadline a").text().trim();
      const link = $(element).find("h2.tileHeadline a").attr("href");
      const data = $(element).find(".summary-view-icon i.icon-day").parent().text().trim(); // A data está dentro de um <span> com a classe "summary-view-icon"
      const hora = $(element).find("span.icon-hour").text().trim();
      const autor = $(element).find("span.hiddenStructure a").text().trim();
      const imagem = $(element).find(".tileImage img").attr("src"); // Coleta a URL da imagem

      noticias.push({
        titulo,
        link,
        data,
        hora,
        autor,
        imagem,
      });
    });

    // Retornar as notícias como JSON
    return new Response(JSON.stringify(noticias), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Erro ao fazer o scraping:", error);
    return new Response(
      JSON.stringify({ error: "Erro ao buscar notícias." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
