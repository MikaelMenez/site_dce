"use client";

import Link from 'next/link';
import { Business, Groups, School, EmojiEvents, Psychology, SportsEsports } from '@mui/icons-material';

export default function Diretorias() {
  const diretorias = [
    {
      nome: "Organização e Gestão",
      descricao: "Responsável pela organização interna, gestão administrativa e coordenação geral das atividades do DCE.",
      icon: Business,
      color: "bg-blue-600",
      subareas: [
        { nome: "Organização", slug: "organizacao" },
        { nome: "Finanças e Patrimônio", slug: "financas-patrimonio" },
        { nome: "Comunicação", slug: "comunicacao" }
      ]
    },
    {
      nome: "Desenvolvimento Estudantil",
      descricao: "Foca no desenvolvimento integral dos estudantes através de programas de apoio e integração.",
      icon: Groups,
      color: "bg-green-600",
      subareas: [
        { nome: "Integração Estudantil", slug: "integracao-estudantil" },
        { nome: "Assistência e Promoção Estudantil", slug: "assistencia-promocao-estudantil" },
        { nome: "Ensino, Pesquisa e Extensão", slug: "ensino-pesquisa-extensao" }
      ]
    },
    {
      nome: "Cultura e Reivindicações",
      descricao: "Promove atividades culturais e representa os estudantes em questões acadêmicas e sociais.",
      icon: EmojiEvents,
      color: "bg-purple-600",
      subareas: [
        { nome: "Opressões", slug: "opressoes" },
        { nome: "Assuntos Acadêmicos, Formação Política", slug: "assuntos-academicos-formacao-politica" },
        { nome: "Cultura, Esporte e Eventos", slug: "cultura-esporte-eventos" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-600 to-blue-700 text-white pt-32 pb-12">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Diretorias do DCE
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Conheça as diretorias e coordenações que trabalham para representar e defender os interesses dos estudantes
          </p>
        </div>
      </section>

      {/* Diretorias Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {diretorias.map((diretoria, index) => {
              const IconComponent = diretoria.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className={`${diretoria.color} p-6 text-white text-center`}>
                    <IconComponent sx={{ fontSize: 48 }} className="mb-4" />
                    <h2 className="text-2xl font-bold mb-2">{diretoria.nome}</h2>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-700 mb-6 text-center">
                      {diretoria.descricao}
                    </p>
                    
                    <div className="space-y-3">
                      <h3 className="font-semibold text-gray-800 text-center mb-4">Coordenações:</h3>
                      {diretoria.subareas.map((subarea, subIndex) => (
                        <Link 
                          key={subIndex}
                          href={`/diretorias/${subarea.slug}`}
                          className="block w-full p-3 text-center bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors border border-gray-200 hover:border-gray-300"
                        >
                          <span className="text-gray-800 font-medium">{subarea.nome}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Informações Adicionais */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Como Participar</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Todas as diretorias do DCE estão abertas à participação dos estudantes. Se você tem interesse em alguma área específica, 
              entre em contato conosco para saber como contribuir com o movimento estudantil.
            </p>
            <Link 
              href="/contatos"
              className="inline-block bg-sky-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-sky-700 transition-colors"
            >
              Entre em Contato
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
