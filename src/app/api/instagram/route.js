import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Como o Instagram requer autenticação para a API oficial,
    // vamos usar uma abordagem alternativa com web scraping
    // ou retornar dados mock que representam posts reais
    
    // Para implementação real, você precisaria:
    // 1. Configurar Instagram Basic Display API
    // 2. Obter Access Token
    // 3. Fazer requisições autenticadas
    
    // Por enquanto, vou implementar uma solução que simula dados reais
    // baseados no perfil @dceufpb.oficial
    
    const mockPosts = [
      {
        id: '1',
        media_type: 'IMAGE',
        media_url: '/images/dcelogo.png',
        caption: '🎓 Bem-vindos ao novo semestre! O DCE está aqui para apoiar todos os estudantes da UFPB. Juntos construímos uma universidade melhor! #DCEUFPB #EstudantesUFPB #NovoSemestre',
        timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 dias atrás
        permalink: 'https://instagram.com/dceufpb.oficial'
      },
      {
        id: '2',
        media_type: 'IMAGE',
        media_url: '/images/panel.png',
        caption: '📢 Assembleia Geral dos Estudantes acontece na próxima quinta-feira! Sua participação é fundamental para as decisões que afetam nossa comunidade universitária. #AssembleiaEstudantil #ParticipacaoEstudantil',
        timestamp: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(), // 4 dias atrás
        permalink: 'https://instagram.com/dceufpb.oficial'
      },
      {
        id: '3',
        media_type: 'IMAGE',
        media_url: '/images/logoufpb.png',
        caption: '🏛️ Representação estudantil nos conselhos superiores da UFPB. Acompanhe as pautas e decisões que impactam diretamente a vida acadêmica de todos os estudantes. #CONSUNI #CONSEPE #RepresentacaoEstudantil',
        timestamp: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(), // 6 dias atrás
        permalink: 'https://instagram.com/dceufpb.oficial'
      },
      {
        id: '4',
        media_type: 'IMAGE',
        media_url: '/images/renova.jpg',
        caption: '🎭 Semana Cultural do DCE foi um sucesso! Obrigado a todos que participaram das atividades culturais, shows e apresentações. A cultura universitária é viva! #SemanaCultural #CulturaUniversitaria',
        timestamp: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString(), // 8 dias atrás
        permalink: 'https://instagram.com/dceufpb.oficial'
      },
      {
        id: '5',
        media_type: 'IMAGE',
        media_url: '/images/PRAPE.png',
        caption: '🎯 Programa de Assistência Estudantil: informações sobre auxílios, bolsas e programas de apoio aos estudantes. Procure o DCE para orientações! #AssistenciaEstudantil #PRAPE #AuxilioEstudantil',
        timestamp: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(), // 10 dias atrás
        permalink: 'https://instagram.com/dceufpb.oficial'
      },
      {
        id: '6',
        media_type: 'VIDEO',
        media_url: '/images/panel.png',
        caption: '📹 Confira o resumo das principais atividades do DCE neste mês! Representação, eventos, apoio estudantil e muito mais. Estamos sempre trabalhando por vocês! #ResumoMensal #DCEUFPB',
        timestamp: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString(), // 12 dias atrás
        permalink: 'https://instagram.com/dceufpb.oficial'
      }
    ];

    // Em um ambiente real, aqui você faria:
    /*
    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${process.env.INSTAGRAM_ACCESS_TOKEN}`
    );
    const data = await response.json();
    */

    return NextResponse.json(mockPosts);
    
  } catch (error) {
    console.error('Erro ao buscar posts do Instagram:', error);
    return NextResponse.json(
      { error: 'Erro ao carregar posts do Instagram' },
      { status: 500 }
    );
  }
}
