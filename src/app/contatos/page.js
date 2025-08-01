"use client";

export default function Contatos() {
  return (
    <>
      <title>Contatos - DCE UFPB</title>
      <meta name="description" content="Entre em contato com o Diretório Central dos Estudantes da UFPB"></meta>
      
      {/* Hero Section */}
      <section className="bg-sky-500 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-8">
            Entre em Contato
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Estamos aqui para ouvir você e representar seus interesses
          </p>
        </div>
      </section>

      {/* Contatos Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Email */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Coordenação Geral
              </h3>
              <p className="text-gray-600 mb-4">
                Entre em contato por email para assuntos oficiais
              </p>
              <a 
                href="mailto:co.geral.dce.ufpb@gmail.com"
                className="text-sky-600 hover:text-sky-800 font-medium text-lg break-all"
              >
                co.geral.dce.ufpb@gmail.com
              </a>
            </div>

            {/* Instagram */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348c1.297 0 2.348 1.051 2.348 2.348S9.746 16.988 8.449 16.988zM12.017 7.405c-2.544 0-4.607 2.063-4.607 4.607s2.063 4.607 4.607 4.607s4.607-2.063 4.607-4.607S14.561 7.405 12.017 7.405z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Instagram Oficial
              </h3>
              <p className="text-gray-600 mb-4">
                Acompanhe nossas atividades e novidades
              </p>
              <a 
                href="https://instagram.com/dceufpb.oficial"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-800 font-medium text-lg"
              >
                @dceufpb.oficial
              </a>
            </div>

            {/* Localização */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Localização
              </h3>
              <p className="text-gray-600 mb-4">
                Universidade Federal da Paraíba
              </p>
              <address className="text-gray-700 not-italic">
                Campus I - João Pessoa<br />
                Cidade Universitária<br />
                João Pessoa - PB
              </address>
            </div>
          </div>
        </div>
      </section>

      {/* Informações Adicionais */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Como Podemos Ajudar
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-sky-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-sky-800">
                  Representação Estudantil
                </h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Participação em conselhos universitários</li>
                  <li>• Defesa dos direitos estudantis</li>
                  <li>• Projetos de melhoria da universidade</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-green-800">
                  Serviços aos Estudantes
                </h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Carteirinha estudantil</li>
                  <li>• Ouvidoria estudantil</li>
                  <li>• Apoio em questões acadêmicas</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-purple-800">
                  Atividades Culturais
                </h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Eventos culturais e esportivos</li>
                  <li>• Semanas acadêmicas</li>
                  <li>• Projetos de integração</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-orange-800">
                  Organização Estudantil
                </h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Articulação entre centros acadêmicos</li>
                  <li>• Formação política estudantil</li>
                  <li>• Mobilizações e campanhas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-sky-500 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Sua Voz é Importante
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            O DCE existe para representar você. Entre em contato e nos ajude a construir uma universidade melhor para todos os estudantes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:co.geral.dce.ufpb@gmail.com"
              className="bg-white text-sky-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              Enviar Email
            </a>
            <a 
              href="https://instagram.com/dceufpb.oficial"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-sky-500 transition"
            >
              Seguir no Instagram
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
