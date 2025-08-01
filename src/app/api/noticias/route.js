import axios from "axios";
import * as cheerio from "cheerio";

const UFPB_URL = "https://www.ufpb.br/ufpb/colecoes/ultimas-noticias";

export async function GET() {
  try {
    // Fazer a requisição à página da UFPB
    const { data: html } = await axios.get(UFPB_URL, {
      timeout: 10000, // 10 segundos de timeout
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });
    
    const $ = cheerio.load(html);

    // Array para armazenar as notícias extraídas
    const noticias = [];

    // Selecionar os artigos de notícias
    $("article.tileItem").each((index, element) => {
      const titulo = $(element).find("h2.tileHeadline a").text().trim();
      const link = $(element).find("h2.tileHeadline a").attr("href");
      const data = $(element).find(".summary-view-icon i.icon-day").parent().text().trim();
      const hora = $(element).find("span.icon-hour").text().trim();
      const autor = $(element).find("span.hiddenStructure a").text().trim();
      const imagem = $(element).find(".tileImage img").attr("src");

      // Só adicionar se tiver pelo menos título
      if (titulo) {
        noticias.push({
          titulo,
          link: link ? (link.startsWith('http') ? link : `https://www.ufpb.br${link}`) : '#',
          data: data || 'Data não disponível',
          hora: hora || '',
          autor: autor || 'PRAPE',
          imagem: imagem ? (imagem.startsWith('http') ? imagem : `https://www.ufpb.br${imagem}`) : null,
        });
      }
    });

    console.log(`Encontradas ${noticias.length} notícias`);

    // Retornar as notícias como JSON
    return Response.json(noticias, {
      status: 200,
      headers: { 
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=300" // Cache por 5 minutos
      },
    });
  } catch (error) {
    console.error("Erro detalhado ao fazer o scraping:", error.message);
    
    // Retornar notícias mock em caso de erro
    const noticiasMock = [
      {
        titulo: "Bem-vindos ao novo semestre letivo",
        link: "#",
        data: new Date().toLocaleDateString('pt-BR'),
        hora: "08:00",
        autor: "DCE UFPB",
        imagem: "/images/PRAPE.png"
      },
      {
        titulo: "Inscrições abertas para atividades estudantis",
        link: "#",
        data: new Date().toLocaleDateString('pt-BR'),
        hora: "14:30",
        autor: "DCE UFPB",
        imagem: "/images/PRAPE.png"
      }
    ];

    return Response.json(noticiasMock, {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
}
