"use client";

import { Flag, RemoveRedEye, Scale, Description } from '@mui/icons-material';

export default function Sobre() {
  return (
    <>
      <title>Sobre o DCE - DCE UFPB</title>
      <meta name="description" content="História, missão e estatuto do Diretório Central dos Estudantes da UFPB"></meta>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-600 to-blue-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-8">
            Sobre o DCE UFPB
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            História, Missão e Compromisso com o Movimento Estudantil
          </p>
        </div>
      </section>

      {/* História */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Nossa História
            </h2>
            
            <div className="space-y-8">
              <div className="bg-sky-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-sky-800">O Movimento Estudantil na UFPB</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4 text-justify">
                  O <strong>Diretório Central dos Estudantes (DCE)</strong> da Universidade Federal da Paraíba tem suas raízes profundamente entrelaçadas com a história da própria universidade e do movimento estudantil brasileiro.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4 text-justify">
                  A UFPB foi fundada em 1955 por iniciativa de José Américo de Almeida, reunindo onze cursos superiores que já existiam no estado. Desde seus primeiros anos, os estudantes se organizaram para defender seus direitos e participar ativamente das decisões acadêmicas e sociais.
                </p>
                <p className="text-gray-700 leading-relaxed text-justify">
                  O DCE UFPB surge neste contexto como a principal entidade representativa dos estudantes, tornando-se uma voz fundamental na defesa da educação pública, gratuita e de qualidade, além de atuar como importante ator no cenário político e social paraibano.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-3 text-gray-800">Décadas de Luta</h4>
                  <p className="text-gray-700 text-justify">
                    Ao longo das décadas, o DCE UFPB participou ativamente de movimentos históricos como as Diretas Já, a luta contra a ditadura militar, a defesa da Constituição de 1988 e movimentos mais recentes pela democratização da universidade.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-3 text-gray-800">Conquistas Importantes</h4>
                  <p className="text-gray-700 text-justify">
                    Entre nossas conquistas estão a ampliação da assistência estudantil, melhorias na infraestrutura da universidade, criação de políticas de permanência e a garantia da participação estudantil nos órgãos colegiados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão e Valores */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Missão e Valores
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-sky-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Flag className="text-white" sx={{ fontSize: 40 }} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Missão</h3>
                <p className="text-gray-700">
                  Representar, organizar e defender os interesses dos estudantes da UFPB, promovendo a participação democrática e a construção de uma universidade pública, gratuita e de qualidade.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <RemoveRedEye className="text-white" sx={{ fontSize: 40 }} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Visão</h3>
                <p className="text-gray-700">
                  Ser uma entidade estudantil forte, democrática e representativa, protagonista na defesa da educação pública e na construção de uma sociedade mais justa e igualitária.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scale className="text-white" sx={{ fontSize: 40 }} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Valores</h3>
                <p className="text-gray-700">
                  Democracia, transparência, solidariedade, justiça social, defesa dos direitos humanos e compromisso com a educação pública e gratuita.
                </p>
              </div>
            </div>

            <div className="bg-sky-100 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-sky-800">Nossos Compromissos</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-sky-600 mr-2">•</span>
                    <span className="text-gray-700">Defesa intransigente da educação pública, gratuita e de qualidade</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-600 mr-2">•</span>
                    <span className="text-gray-700">Ampliação e fortalecimento da assistência estudantil</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-600 mr-2">•</span>
                    <span className="text-gray-700">Democratização da universidade e participação estudantil</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-sky-600 mr-2">•</span>
                    <span className="text-gray-700">Luta contra todas as formas de opressão e discriminação</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-600 mr-2">•</span>
                    <span className="text-gray-700">Promoção da cultura, esporte e atividades de extensão</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-600 mr-2">•</span>
                    <span className="text-gray-700">Articulação com movimentos sociais e populares</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Estrutura e Organização */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Estrutura e Organização
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-sky-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-sky-800">Instâncias Deliberativas</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Assembleia Geral:</strong> Órgão máximo de deliberação</li>
                  <li><strong>Conselho de Representantes:</strong> Representantes dos centros acadêmicos</li>
                  <li><strong>Diretoria Executiva:</strong> Gestão cotidiana da entidade</li>
                  <li><strong>Conselho Fiscal:</strong> Fiscalização das contas</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Representação</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>CONSUNI:</strong> Conselho Universitário</li>
                  <li><strong>CONSEPE:</strong> Conselho de Ensino, Pesquisa e Extensão</li>
                  <li><strong>Comitês e Comissões:</strong> Diversas instâncias da universidade</li>
                  <li><strong>UNE:</strong> União Nacional dos Estudantes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Estatuto */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">
              Estatuto do DCE UFPB
            </h2>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="mb-8">
                <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Description className="text-red-600" sx={{ fontSize: 48 }} />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Documento Oficial</h3>
                <p className="text-gray-700 mb-6">
                  O Estatuto do DCE UFPB estabelece as normas de funcionamento, organização e representação da entidade, definindo direitos e deveres dos estudantes.
                </p>
              </div>
              
              <div className="bg-sky-50 p-6 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-3 text-sky-800">Principais Capítulos do Estatuto:</h4>
                <div className="grid md:grid-cols-2 gap-4 text-left">
                  <ul className="space-y-1 text-gray-700">
                    <li>• Capítulo I - Denominação, Natureza, Sede, Duração, Fins e Representação Legal</li>
                    <li>• Capítulo II - Dos Membros</li>
                    <li>• Capítulo III - Do Patrimônio</li>
                    <li>• Capítulo IV - Das Instâncias Deliberativas</li>
                  </ul>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Capítulo V - Das Eleições</li>
                    <li>• Capítulo VI - Do Regime Disciplinar</li>
                    <li>• Capítulo VII - Das Disposições Gerais e Transitórias</li>
                  </ul>
                </div>
              </div>
              
              <a 
                href="/ESTATUTO.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-sky-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-sky-600 transition"
              >
                <span className="mr-2">📄</span>
                Baixar Estatuto Completo (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* UFPB em Números */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              A UFPB em Números
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center bg-sky-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-sky-600 mb-2">39.283</div>
                <div className="text-gray-700">Estudantes Matriculados</div>
              </div>
              <div className="text-center bg-green-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">123</div>
                <div className="text-gray-700">Cursos de Graduação</div>
              </div>
              <div className="text-center bg-purple-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">98</div>
                <div className="text-gray-700">Cursos de Pós-graduação</div>
              </div>
              <div className="text-center bg-orange-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-orange-600 mb-2">4</div>
                <div className="text-gray-700">Campi</div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-600 text-lg">
                Uma das principais universidades federais do Nordeste, com tradição em ensino, pesquisa e extensão.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-sky-500 to-blue-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Faça Parte da Nossa História
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            O DCE UFPB é construído pela participação ativa dos estudantes. Venha participar e contribuir a escrever os próximos capítulos da nossa luta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contatos"
              className="bg-white text-sky-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              Entre em Contato
            </a>
            <a 
              href="https://instagram.com/dceufpb.oficial"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-sky-500 transition"
            >
              Acompanhe nas Redes
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
